import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { HomePatientComponent } from './patient/home-patient/home-patient.component';
import { ProfilComponent } from './patient/profil/profil.component';
import { RendezVousComponent } from './patient/rendez-vous/rendez-vous.component';
import { TicketComponent } from './patient/ticket/ticket.component';
import { RecordMedicalComponent } from './patient/record-medical/record-medical.component';
import { OrdonnancesComponent } from './patient/ordonnances/ordonnances.component';
import { DossierMedicalComponent } from './patient/dossier-medical/dossier-medical.component';
import { AvisComponent } from './patient/avis/avis.component';
import { ProfilMedecinComponent } from './medecin/profil-medecin/profil-medecin.component';
import { ListeRendezVousComponent } from './medecin/liste-rendez-vous/liste-rendez-vous.component';
import { ConsultationVideoComponent } from './medecin/consultation-video/consultation-video.component';
import { OrdonanceMedecinComponent } from './medecin/ordonance-medecin/ordonance-medecin.component';
import { DossiersMedicauxComponent } from './medecin/dossiers-medicaux/dossiers-medicaux.component';
import { RecommandationsComponent } from './medecin/recommandations/recommandations.component';
import { HistoriqueConsultationsComponent } from './medecin/historique-consultations/historique-consultations.component';
import { NotificationMedecinComponent } from './medecin/notification-medecin/notification-medecin.component';
import { HomeMedecinComponent } from './medecin/home-medecin/home-medecin.component';
// import { AdminDashboardAdminComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import { GestionUtilisateursComponent } from './admin/gestion-utilisateurs/gestion-utilisateurs.component';
import { AjouterUsersComponent } from './admin/ajouter-users/ajouter-users.component';
import { ValidationMedecinsComponent } from './admin/validation-medecins/validation-medecins.component';
import { GestionSpecialitesComponent } from './admin/gestion-specialites/gestion-specialites.component';
import { GestionPaiementsComponent } from './admin/gestion-paiements/gestion-paiements.component';
import { AvisEvaluationComponent } from './admin/avis-evaluation/avis-evaluation.component';
import { GestionPlanningsComponent } from './admin/gestion-plannings/gestion-plannings.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { ModerationComponent } from './admin/moderation/moderation.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NotificationsPatientComponent } from './patient/notifications-patient/notifications-patient.component';
import { AdminUsersComponent } from './admin/admin-users/admin-users.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "forget-password", component: ForgetPasswordComponent },
    { path: "reset-password", component: ResetPasswordComponent },
    //route patient
    { path: "home-patient", component: HomePatientComponent },
    { path: "profil", component: ProfilComponent },
    { path: "rendez-vous", component: RendezVousComponent },
    { path: "paiement", component: TicketComponent },
    { path: "consultation", component: RecordMedicalComponent },
    { path: "notifications-patient", component: NotificationsPatientComponent },
    { path: "ordonnances", component: OrdonnancesComponent },
    { path: "dossier-medical", component: DossierMedicalComponent },
    { path: "avis", component: AvisComponent },
    // routes medecins 
    { path: "home-medecin", component: HomeMedecinComponent },
    { path: 'profil-medecin', component: ProfilMedecinComponent },
    { path: 'mes-rendez-vous', component: ListeRendezVousComponent },
    { path: 'consultation-video', component: ConsultationVideoComponent },
    { path: 'ordonance-medecin', component: OrdonanceMedecinComponent },
    { path: 'dossiers-medicaux', component: DossiersMedicauxComponent },
    { path: 'recommandations', component: RecommandationsComponent },
    { path: 'historique-consultations', component: HistoriqueConsultationsComponent },
    { path: 'notification-medecin', component: NotificationMedecinComponent },
    // routes admin 
    {path: 'admin', component: AdminComponent},
    { path: 'admin', component: DashboardComponent },
    // { path: 'utilisateurs', component: GestionUtilisateursComponent },
    { path: 'users', component: AdminUsersComponent },
    { path: 'validations', component: ValidationMedecinsComponent },
    { path: 'specialites', component: GestionSpecialitesComponent },
    { path: 'paiements', component: GestionPaiementsComponent },
    { path: 'avis', component: AvisEvaluationComponent },
    { path: 'plannings', component: GestionPlanningsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'moderation', component: ModerationComponent },
    { path: 'add-users', component: AjouterUsersComponent },
];
