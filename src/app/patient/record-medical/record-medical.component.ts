import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-record-medical',
  imports: [CommonModule],
  templateUrl: './record-medical.component.html',
  styleUrls: ['./record-medical.component.css']
})
export class RecordMedicalComponent {
  constructor(private router: Router) { }
  homePatient() {
    this.router.navigate(['home-patient']);
  }
  localStream: MediaStream | undefined;
  remoteStream: MediaStream | undefined;
  peerConnection: RTCPeerConnection | undefined;
  callStarted = false;
  callError = false;

  // Fonction pour démarrer la consultation vidéo
  startVideoCall() {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        // Affiche la vidéo locale (celle de l'utilisateur)
        const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
        localVideo.srcObject = stream;
        this.localStream = stream;

        // Créer la connexion peer-to-peer
        this.peerConnection = this.createPeerConnection();

        // Ajoute le stream local à la connexion
        this.localStream?.getTracks().forEach((track) => {
          this.peerConnection?.addTrack(track, this.localStream!);
        });

        // Crée l'offre de connexion pour le médecin
        this.peerConnection
          .createOffer()
          .then((offer) => this.peerConnection!.setLocalDescription(offer))
          .then(() => {
            // Envoyer l'offre au médecin via un serveur WebSocket ou autre méthode
            console.log('Offre envoyée au médecin');
          })
          .catch((error) => {
            console.error('Erreur lors de la création de l\'offre : ', error);
            this.callError = true;
          });

        this.callStarted = true;
      })
      .catch((error) => {
        console.error('Erreur d\'accès à la caméra : ', error);
        this.callError = true;
      });
  }

  // Crée une connexion peer-to-peer WebRTC
  createPeerConnection() {
    const configuration: RTCConfiguration = {
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] // Serveur STUN
    };

    const peerConnection = new RTCPeerConnection(configuration);

    // Lorsque le médecin envoie son stream, on l'affiche
    peerConnection.ontrack = (event) => {
      const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
      remoteVideo.srcObject = event.streams[0];
      this.remoteStream = event.streams[0];
    };

    return peerConnection;
  }

  // Fonction pour gérer la réception de l'offre (médecin)
  handleOffer(offer: RTCSessionDescriptionInit) {
    this.peerConnection?.setRemoteDescription(new RTCSessionDescription(offer))
      .then(() => {
        // Créer une réponse après avoir reçu l'offre
        return this.peerConnection!.createAnswer();
      })
      .then((answer) => {
        return this.peerConnection!.setLocalDescription(answer);
      })
      .then(() => {
        // Envoyer la réponse au médecin via un serveur WebSocket ou autre méthode
        console.log('Réponse envoyée au médecin');
      })
      .catch((error) => {
        console.error('Erreur lors du traitement de l\'offre : ', error);
        this.callError = true;
      });
  }

  // Fonction pour arrêter la consultation vidéo
  stopVideoCall() {
    // Arrêter le flux vidéo et audio local
    if (this.localStream) {
      const tracks = this.localStream.getTracks();
      tracks.forEach(track => track.stop());
    }

    // Si vous avez une connexion peer WebRTC, vous devez également la fermer ici
    if (this.peerConnection) {
      this.peerConnection.close();
    }

    // Réinitialiser les variables
    this.callStarted = false;
    this.localStream = undefined;
    this.remoteStream = undefined;
    this.peerConnection = undefined;

    // Mettre fin aux vidéos locales et distantes
    const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
    if (localVideo) {
      localVideo.srcObject = null;
    }

    const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
    if (remoteVideo) {
      remoteVideo.srcObject = null;
    }
  }
}
