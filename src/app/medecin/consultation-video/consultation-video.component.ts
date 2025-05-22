import { Component, OnInit, OnDestroy } from '@angular/core';

declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-consultation-video',
  templateUrl: './consultation-video.component.html',
  styleUrls: ['./consultation-video.component.css']
})
export class ConsultationVideoComponent implements OnInit, OnDestroy {
  domain: string = 'meet.jit.si';
  roomName: string = 'ConsultationMedecinPatient_' + Math.random().toString(36).substring(2, 15);
  api: any;

  ngOnInit(): void {
    this.startVideo();
  }

  startVideo(): void {
    const options = {
      roomName: this.roomName,
      width: '100%',
      height: 600,
      parentNode: document.querySelector('#jitsi-container'),
      interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false
      }
    };

    this.api = new JitsiMeetExternalAPI(this.domain, options);
  }

  endCall(): void {
    if (this.api) {
      this.api.executeCommand('hangup');
      this.api.dispose();
      alert('Consultation terminée.');
    }
  }

  ngOnDestroy(): void {
    if (this.api) {
      this.api.dispose();
    }
  }
}
