import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ProfessorProvider} from './../../providers/professor/professor';
import { Professor } from '../../models/model.cadastrar-professor';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { provideModuleLoader } from 'ionic-angular/util/module-loader';
@IonicPage()

@Component({
  selector: 'page-cadastrar-professor',
  templateUrl: 'cadastrar-professor.html',
})

export class CadastrarProfessorPage {
  professores: any[];
  professor: Professor;
  nomeProfessor: string;
  matriculaProfessor: string;
  crefitoProfessor: string;
  emailProfessor: string;
  telefoneProfessor: string;
  especialidades: any;
  codigoEspecialidade : any;
  idProfessor = "";
  especialidadeProfessor: any; 
  
  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProfessorProvider,
    private http: HttpClient,
    public alertCtrl: AlertController
    )
    {
    this.listarEspecialidade();   

    if (this.navParams.data.professor) {      
      this.professores = this.navParams.data.professor;
      var text = JSON.stringify(this.professores);
      var obj = JSON.parse(text);
      this.nomeProfessor = obj.nomeprofessor;
      this.matriculaProfessor = obj.matriculaprofessor;
      this.crefitoProfessor = obj.crefitoprofessor;
      this.emailProfessor = obj.emailprofessor;
      this.telefoneProfessor = obj.telefoneprofessor;
      this.idProfessor = obj.idprofessor;
      this.codigoEspecialidade = obj.codigoespecialidade;
  }
}

CadastrarProfessor(){
  this.provider.professorProvider({
    nomeProfessor: this.nomeProfessor,
    matriculaProfessor: this.matriculaProfessor,
    crefitoProfessor: this.crefitoProfessor,
    emailProfessor: this.emailProfessor,
    telefoneProfessor: this.telefoneProfessor,
    especialidadeProfessor: this.especialidadeProfessor,
    codigoEspecialidade: this.codigoEspecialidade,
    idProfessor: this.idProfessor
  });

  this.showAlertCadastrar(); 
}

listarEspecialidade(){
  this.provider.listar().then(
    data => {
      this.especialidades = data;
      console.log(data);
    }
  )
  .catch(error => alert(error));
}

showAlertCadastrar() {
  let alert = this.alertCtrl.create({
    title: 'Sucesso!',
    subTitle: 'Professor cadastrado com sucesso',
    buttons: ['Ok']
  });
  alert.present();
  this.navCtrl.pop();
}

showAlertAlterar() {
  let alert = this.alertCtrl.create({
    title: 'Sucesso!',
    subTitle: 'Professor alterado com sucesso',
    buttons: ['Ok']
  });
  alert.present();
  this.navCtrl.pop();
}

ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarProfessorPage');
  }

}
