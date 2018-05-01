webpackJsonp([11],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarEspecialidadeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrarEspecialidadeProvider = (function () {
    function CadastrarEspecialidadeProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    CadastrarEspecialidadeProvider.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    CadastrarEspecialidadeProvider.prototype.create = function (especialidade) {
        var _this = this;
        var rota = "cadastrar";
        if (especialidade.codigoEspecialidade != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/especialidade/' + rota, especialidade).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    CadastrarEspecialidadeProvider.prototype.retornarEspecialidade = function () {
        return this.http.get('http://localhost:3000/especialidade/listar').toPromise();
    };
    CadastrarEspecialidadeProvider.prototype.excluirEspecialidade = function (codigoEspecialidade) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/especialidade/excluir', codigoEspecialidade).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], CadastrarEspecialidadeProvider.prototype, "nav", void 0);
    CadastrarEspecialidadeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], CadastrarEspecialidadeProvider);
    return CadastrarEspecialidadeProvider;
}());

//# sourceMappingURL=especialidade.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarEstagiarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrarEstagiarioProvider = (function () {
    function CadastrarEstagiarioProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    CadastrarEstagiarioProvider.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    CadastrarEstagiarioProvider.prototype.create = function (estagiario) {
        var _this = this;
        var rota = "cadastrar";
        if (estagiario.idEstagiario != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/estagiario/' + rota, estagiario).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    CadastrarEstagiarioProvider.prototype.retornarEstagiario = function () {
        return this.http.get('http://localhost:3000/estagiario/listar').toPromise();
    };
    CadastrarEstagiarioProvider.prototype.excluirEstagiario = function (idEstagiario) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/estagiario/excluir', idEstagiario).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], CadastrarEstagiarioProvider.prototype, "nav", void 0);
    CadastrarEstagiarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], CadastrarEstagiarioProvider);
    return CadastrarEstagiarioProvider;
}());

//# sourceMappingURL=estagiario.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoEstagiarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GrupoEstagiarioProvider = (function () {
    function GrupoEstagiarioProvider(http) {
        this.http = http;
    }
    GrupoEstagiarioProvider.prototype.retornarGrupo = function () {
        return this.http.get('http://localhost:3000/grupoestagiario/listargrupo').toPromise();
    };
    GrupoEstagiarioProvider.prototype.retornarEstagiario = function () {
        return this.http.get('http://localhost:3000/grupoestagiario/listarestagiario').toPromise();
    };
    GrupoEstagiarioProvider.prototype.retornarGrupoEstagiario = function () {
        return this.http.get('http://localhost:3000/grupoestagiario/listargrupoestagiario').toPromise();
    };
    GrupoEstagiarioProvider.prototype.create = function (codigos) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/grupoestagiario/cadastrar', codigos).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    GrupoEstagiarioProvider.prototype.excluirGrupoEstagiario = function (idgrupo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/grupoestagiario/excluir', idgrupo).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    GrupoEstagiarioProvider.prototype.retornarEstagiarioEditar = function (idGrupo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/grupoestagiario/listarestagiarioseditar', idGrupo).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    GrupoEstagiarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GrupoEstagiarioProvider);
    return GrupoEstagiarioProvider;
}());

//# sourceMappingURL=grupo-estagiario.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrupoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the GrupoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GrupoProvider = (function () {
    function GrupoProvider(http) {
        this.http = http;
        console.log('Hello GrupoProvider Provider');
    }
    GrupoProvider.prototype.create = function (grupo) {
        var _this = this;
        var rota = "cadastrar";
        if (grupo.idGrupo != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/grupo/' + rota, grupo).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    GrupoProvider.prototype.retornarGrupo = function () {
        return this.http.get('http://localhost:3000/grupo/listar').toPromise();
    };
    GrupoProvider.prototype.excluirEstagiario = function (idGrupo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/grupo/excluir', idGrupo).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    GrupoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GrupoProvider);
    return GrupoProvider;
}());

//# sourceMappingURL=grupo.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfessorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfessorProvider = (function () {
    function ProfessorProvider(http) {
        this.http = http;
    }
    ProfessorProvider.prototype.professorProvider = function (professor) {
        var _this = this;
        var rota = "cadastrar";
        if (professor.idProfessor != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/professor/' + rota, professor).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ProfessorProvider.prototype.retornarProfessor = function () {
        return this.http.get('http://localhost:3000/professor/listar').toPromise();
    };
    ProfessorProvider.prototype.excluirProfessor = function (idProfessor) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/professor/excluir', idProfessor).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ProfessorProvider.prototype.listar = function () {
        return this.http.get('http://localhost:3000/professor/listarEspecialidade').toPromise();
    };
    ProfessorProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], ProfessorProvider);
    return ProfessorProvider;
    var _a;
}());

//# sourceMappingURL=professor.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SemestreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SemestreProvider = (function () {
    function SemestreProvider(http) {
        this.http = http;
    }
    SemestreProvider.prototype.create = function (semestre) {
        var _this = this;
        var rota = "cadastrar";
        if (semestre.idSemestre != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/semestre/' + rota, semestre).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    SemestreProvider.prototype.retornarEstagiario = function () {
        return this.http.get('http://localhost:3000/semestre/listar').toPromise();
    };
    SemestreProvider.prototype.excluirEstagiario = function (idSemestre) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/semestre/excluir', idSemestre).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    SemestreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SemestreProvider);
    return SemestreProvider;
}());

//# sourceMappingURL=semestre.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalizarPreCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pre_cadastro_pre_cadastro__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinalizarPreCadastroPage = (function () {
    function FinalizarPreCadastroPage(navCtrl, navParams, providerPreCadastro, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.providerPreCadastro = providerPreCadastro;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.validarCadastro = {};
        if (this.navParams.data.paciente) {
            this.paciente = this.navParams.data.paciente;
            this.dadosPaciente = JSON.parse(JSON.stringify(this.paciente));
            this.listarEspecialidade(this.dadosPaciente.codigoespecialidade);
            this.nomePaciente = this.dadosPaciente.nomepaciente;
            this.registroGeral = this.dadosPaciente.rgpaciente;
            this.CPF = this.dadosPaciente.cpfpaciente;
            this.dataNascimento = this.dadosPaciente.datanascpaciente;
            this.rendaFamiliar = this.dadosPaciente.rendapaciente;
            this.endereco = this.dadosPaciente.enderecopaciente;
            this.numero = this.dadosPaciente.numeropaciente;
            this.bairro = this.dadosPaciente.bairropaciente;
            this.cidade = this.dadosPaciente.cidadepaciente;
            this.telefoneUm = this.dadosPaciente.contato1paciente;
            this.telefoneDois = this.dadosPaciente.telefone2;
        }
        this.validarCadastro = formBuilder.group({
            nomePaciente: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            registroGeral: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            CPF: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dataNascimento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rendaFamiliar: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            endereco: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            numero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bairro: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cidade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefoneUm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            telefoneDois: ['', ''],
            especialidade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            observacao: ['', ''],
        });
    }
    FinalizarPreCadastroPage.prototype.aprovarCadastro = function () {
        var _this = this;
        this.providerPreCadastro.aprovarCadastro({
            idpaciente: this.dadosPaciente.idpaciente,
            nomePaciente: this.nomePaciente,
            registroGeral: this.registroGeral,
            CPF: this.CPF,
            dataNascimento: this.dataNascimento,
            rendaFamiliar: this.rendaFamiliar,
            endereco: this.endereco,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            telefoneUm: this.telefoneUm,
            telefoneDois: this.telefoneDois,
            especialidade: this.especialidade,
            observacao: this.observacao
        }).then(function (result) {
            _this.showAlert();
        });
    };
    FinalizarPreCadastroPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Paciente aprovado e encaminhado para a fila de espera.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    FinalizarPreCadastroPage.prototype.listarEspecialidade = function (especialidade) {
        var _this = this;
        this.providerPreCadastro.retornarEspecialidade().then(function (data) {
            _this.especialidades = data;
            _this.especialidade = especialidade;
        })
            .catch(function (error) { return alert(error); });
    };
    FinalizarPreCadastroPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    FinalizarPreCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-finalizar-pre-cadastro',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\finalizar-pre-cadastro\finalizar-pre-cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aprovar pré-cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="validarCadastro" (ngSubmit)="aprovarCadastro()">\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n          <ion-label floating>Nome Completo</ion-label>\n          <ion-input name="nomePaciente" [(ngModel)]="nomePaciente" formControlName="nomePaciente" type="text"></ion-input>\n        </ion-item>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Nº RG</ion-label>\n            <ion-input name="registroGeral" [(ngModel)]="registroGeral" formControlName="registroGeral" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Nº CPF</ion-label>\n            <ion-input type="text" name="CPF" [(ngModel)]="CPF" formControlName="CPF" [brmasker]="{mask:\'000.000.000-00\', len:14}"></ion-input> >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Data de Nascimento</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" name="dataNascimento" formControlName="dataNascimento" [(ngModel)]="dataNascimento"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item class="rendaFamiliar">\n            <ion-label floating>Renda Familiar</ion-label>\n            <ion-input name="rendaFamiliar" [(ngModel)]="rendaFamiliar" formControlName="rendaFamiliar" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-75>\n          <ion-item>\n            <ion-label floating>Endereço</ion-label>\n            <ion-input name="endereco" [(ngModel)]="endereco" formControlName="endereco" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-25>\n          <ion-item>\n            <ion-label floating>Número</ion-label>\n            <ion-input name="numero" [(ngModel)]="numero" formControlName="numero" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Bairro</ion-label>\n            <ion-input name="bairro" [(ngModel)]="bairro" formControlName="bairro" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Cidade</ion-label>\n            <ion-input name="cidade" [(ngModel)]="cidade" formControlName="cidade" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Telefone 1</ion-label>\n            <ion-input type="text" name="telefoneUm" [(ngModel)]="telefoneUm" formControlName="telefoneUm" [brmasker]="{mask:\'(00)00000-0000\', len:14}"></ion-input> >\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Telefone 2</ion-label>\n            <ion-input type="text" name="telefoneDois" [(ngModel)]="telefoneDois" formControlName="telefoneDois" [brmasker]="{mask:\'(00)00000-0000\', len:14}"></ion-input> >        \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>    \n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Área de Especialidade</ion-label>\n            <ion-select name= "especialidade" [(ngModel)]="especialidade" formControlName="especialidade">\n              <ion-option *ngFor="let especialidade of especialidades"  value="{{ especialidade.codigoespecialidade }}">{{ especialidade.descricaoespecialidade }}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-item>\n        <ion-label floating>Observações</ion-label>\n        <ion-input name="observacao" [(ngModel)]="observacao" formControlName="observacao" type="text"></ion-input>\n      </ion-item>\n    </ion-grid>\n    <button type="button" ion-button color="danger" (click)="cancelar()">Cancelar</button>\n    <button type="submit" [disabled]="!validarCadastro.valid" ion-button color="secondary">Aprovar</button>    \n  </form>    \n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\finalizar-pre-cadastro\finalizar-pre-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pre_cadastro_pre_cadastro__["a" /* PreCadastroProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], FinalizarPreCadastroPage);
    return FinalizarPreCadastroPage;
}());

//# sourceMappingURL=finalizar-pre-cadastro.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreCadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_pre_cadastro_pre_cadastro__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_arquivos_arquivos__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreCadastroPage = (function () {
    function PreCadastroPage(navCtrl, navParams, provider, alertCtrl, arquivos, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.arquivos = arquivos;
        this.formBuilder = formBuilder;
        this.validarPreCadastro = {};
        this.linkAnexo = "";
        this.classeFile = 'ocultar';
        this.classeIcone = 'ocultar';
        this.listarEspecialidade();
        this.validarPreCadastro = formBuilder.group({
            nomePaciente: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            registroGeral: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            CPF: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            dataNascimento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            rendaFamiliar: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            endereco: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            numero: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            bairro: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            cidade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            telefoneUm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            telefoneDois: ['', ''],
            especialidade: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            encaminhamento: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    }
    PreCadastroPage.prototype.incluirPreCadastro = function () {
        var _this = this;
        this.provider.gravar({
            nomePaciente: this.nomePaciente,
            registroGeral: this.registroGeral,
            CPF: this.CPF,
            dataNascimento: this.dataNascimento,
            rendaFamiliar: this.rendaFamiliar,
            endereco: this.endereco,
            numero: this.numero,
            bairro: this.bairro,
            cidade: this.cidade,
            telefoneUm: this.telefoneUm,
            telefoneDois: this.telefoneDois,
            encaminhamento: this.encaminhamento,
            especialidade: this.especialidade,
            linkAnexo: this.linkAnexo
        }).then(function (result) {
            _this.showAlert();
        });
    };
    PreCadastroPage.prototype.listarEspecialidade = function () {
        var _this = this;
        this.provider.retornarEspecialidade().then(function (data) {
            _this.especialidades = data;
        })
            .catch(function (error) { return alert(error); });
    };
    PreCadastroPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Pré cadastro realizado.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    PreCadastroPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    PreCadastroPage.prototype.detectarArquivos = function (event) {
        var _this = this;
        var fileList = event.target.files;
        var reader = new FileReader();
        reader.onloadend = function (e) {
            _this.files = Array.from(event.target.files);
            _this.upload();
        };
        reader.readAsDataURL(fileList.item(0));
    };
    PreCadastroPage.prototype.upload = function () {
        var _this = this;
        var file = this.files[0];
        this.arquivos.upload(file).then(function (data) {
            _this.linkAnexo = data;
            _this.classeIcone = 'mostrar';
        });
    };
    PreCadastroPage.prototype.visualizar = function () {
        this.linkAnexo;
        window.open(this.linkAnexo, 'blank');
    };
    PreCadastroPage.prototype.verificaEncaminhamento = function (valor) {
        if (valor == "S") {
            this.classeFile = 'mostrar';
        }
        else {
            this.classeFile = 'ocultar';
        }
    };
    PreCadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pre-cadastro',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\pre-cadastro\pre-cadastro.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pré-cadastro</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="validarPreCadastro" (ngSubmit)="incluirPreCadastro()">\n    <ion-grid>\n      <ion-row>\n        <ion-item>\n          <ion-label floating>Nome Completo</ion-label>\n          <ion-input name="nomePaciente" [(ngModel)]="nomePaciente" formControlName="nomePaciente" type="text" ></ion-input>\n        </ion-item>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Nº RG</ion-label>\n            <ion-input name="registroGeral" [(ngModel)]="registroGeral" formControlName="registroGeral" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Nº CPF</ion-label>\n            <ion-input type="text" name="CPF"  [(ngModel)]="CPF" formControlName="CPF" [brmasker]="{mask:\'000.000.000-00\', len:14}"></ion-input> >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Data de Nascimento</ion-label>\n            <ion-datetime displayFormat="DD/MM/YYYY" name="dataNascimento" formControlName="dataNascimento" [(ngModel)]="dataNascimento"></ion-datetime>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item class="rendaFamiliar">\n            <ion-label floating>Renda Familiar</ion-label>\n            <ion-input name="rendaFamiliar" [(ngModel)]="rendaFamiliar" formControlName="rendaFamiliar" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-75>\n          <ion-item>\n            <ion-label floating>Endereço</ion-label>\n            <ion-input name="endereco" [(ngModel)]="endereco" formControlName="endereco" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-25>\n          <ion-item>\n            <ion-label floating>Número</ion-label>\n            <ion-input name="numero" [(ngModel)]="numero" formControlName="numero" type="number"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Bairro</ion-label>\n            <ion-input name="bairro" [(ngModel)]="bairro" formControlName="bairro"  type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Cidade</ion-label>\n            <ion-input name="cidade" [(ngModel)]="cidade" formControlName="cidade" type="text"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Telefone 1</ion-label>\n            <ion-input type="text" name="telefoneUm" [(ngModel)]="telefoneUm" formControlName="telefoneUm" [brmasker]="{mask:\'(00)00000-0000\', len:14}"></ion-input> >\n          </ion-item>\n        </ion-col>\n        <ion-col width-50>\n          <ion-item>\n            <ion-label floating>Telefone 2</ion-label>\n            <ion-input type="text" name="telefoneDois" [(ngModel)]="telefoneDois" formControlName="telefoneDois" [brmasker]="{mask:\'(00)00000-0000\', len:14}"></ion-input> >\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-100>\n          <ion-item>\n            <ion-label floating>Área de Especialidade</ion-label>\n            <ion-select name= "especialidade" formControlName="especialidade" [(ngModel)]="especialidade">\n              <ion-option *ngFor="let especialidade of especialidades" value="{{ especialidade.codigoespecialidade }}">{{ especialidade.descricaoespecialidade }}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-25>\n          <ion-item>\n            <ion-label floating>Possui encaminhamento médico?</ion-label>\n            <ion-select name="encaminhamento" formControlName="encaminhamento" [(ngModel)]="encaminhamento" (ionChange)="verificaEncaminhamento($event)">\n              <ion-option value="S">Sim</ion-option>\n              <ion-option value="N">Não</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n        <ion-col width-75>\n          <div style="margin-top: 30px;" >\n            <input type="file" id="file" (change)="detectarArquivos($event)" [ngClass]="classeFile"/>\n            <ion-icon md="md-eye" title="visualizar" (click)="visualizar()" [ngClass]="classeIcone"></ion-icon>            \n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button type="button" ion-button color="danger" (click)="cancelar()">Cancelar</button>\n    <button type="submit" [disabled]="!validarPreCadastro.valid" ion-button color="secondary">Confirmar</button>\n  </form>  \n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\pre-cadastro\pre-cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_pre_cadastro_pre_cadastro__["a" /* PreCadastroProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_arquivos_arquivos__["a" /* ArquivosProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], PreCadastroPage);
    return PreCadastroPage;
}());

//# sourceMappingURL=pre-cadastro.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaSalaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservaSalaProvider = (function () {
    function ReservaSalaProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    ReservaSalaProvider.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    ReservaSalaProvider.prototype.create = function (reserva) {
        var _this = this;
        var rota = "cadastrar";
        if (reserva.idReserva != "") {
            rota = "editar";
        }
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/reservaSala/' + rota, reserva).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    ReservaSalaProvider.prototype.retornarReservaSala = function () {
        return this.http.get('http://localhost:3000/reservaSala/listar').toPromise();
    };
    ReservaSalaProvider.prototype.excluirReservaSala = function (idReserva) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/reservaSala/excluir', idReserva).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], ReservaSalaProvider.prototype, "nav", void 0);
    ReservaSalaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ReservaSalaProvider);
    return ReservaSalaProvider;
}());

//# sourceMappingURL=reserva-sala.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarEspecialidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_especialidade_especialidade__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrarEspecialidadePage = (function () {
    function CadastrarEspecialidadePage(navCtrl, navParams, alertCtrl, http, formBuilder, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.cadastroEspecialidade = {};
        this.codigoEspecialidade = "";
        if (this.navParams.data.especialidade) {
            this.especialidades = this.navParams.data.especialidade;
            console.log(this.especialidades);
            var text = JSON.stringify(this.especialidades);
            var obj = JSON.parse(text);
            this.descricaoEspecialidade = obj.descricaoespecialidade;
            this.codigoEspecialidade = obj.codigoespecialidade;
        }
        this.cadastroEspecialidade = formBuilder.group({
            descricaoEspecialidade: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    CadastrarEspecialidadePage.prototype.cadastrarEspecialidade = function () {
        var _this = this;
        this.provider.create({
            descricaoEspecialidade: this.descricaoEspecialidade,
            codigoEspecialidade: this.codigoEspecialidade
        }).then(function (result) {
            console.log(result);
            _this.showAlert();
        });
    };
    CadastrarEspecialidadePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Especialidade gravada.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarEspecialidadePage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastrarEspecialidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-especialidade',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-especialidade\cadastrar-especialidade.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastrar Especialidade</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]= "cadastroEspecialidade" (ngSubmit)="cadastrarEspecialidade()" #f="ngForm">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Descrição</ion-label>\n              <ion-input name="descricaoEspecialidade" [(ngModel)]="descricaoEspecialidade" formControlName="descricaoEspecialidade"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>  \n    <button type="button" (click)="cancelar()" ion-button color="danger">Cancelar</button>\n    <button type="submit" [disabled]="!cadastroEspecialidade.valid" ion-button color="secondary">Confirmar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-especialidade\cadastrar-especialidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_especialidade_especialidade__["a" /* CadastrarEspecialidadeProvider */]])
    ], CadastrarEspecialidadePage);
    return CadastrarEspecialidadePage;
}());

//# sourceMappingURL=cadastrar-especialidade.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarEstagiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_estagiario_estagiario__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrarEstagiarioPage = (function () {
    function CadastrarEstagiarioPage(navCtrl, navParams, provider, http, alertCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.cadastroEstagiario = {};
        this.idEstagiario = "";
        if (this.navParams.data.estagiario) {
            this.estagiarios = this.navParams.data.estagiario;
            console.log(this.estagiarios);
            var text = JSON.stringify(this.estagiarios);
            var obj = JSON.parse(text);
            this.nomeEstagiario = obj.nomeestagiario;
            this.numeroMatricula = obj.matriculaestagiario;
            this.email = obj.emailestagiario;
            this.telefone = obj.telefoneestagiario;
            this.idEstagiario = obj.idestagiario;
        }
        this.cadastroEstagiario = formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            matricula: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            telefone: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].email, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])]
        });
    }
    CadastrarEstagiarioPage.prototype.cadastrarEstagiario = function () {
        var _this = this;
        this.provider.create({
            nomeEstagiario: this.nomeEstagiario,
            numeroMatricula: this.numeroMatricula,
            telefone: this.telefone,
            email: this.email,
            idEstagiario: this.idEstagiario
        }).then(function (result) {
            console.log(result);
            _this.showAlert();
        });
    };
    CadastrarEstagiarioPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Estagiário gravado.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarEstagiarioPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastrarEstagiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-estagiario',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-estagiario\cadastrar-estagiario.html"*/'<!--\n  Generated template for the CadastrarEstagiarioPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro de estagiário</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]= "cadastroEstagiario" (ngSubmit)="cadastrarEstagiario()" #f="ngForm" >\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Nome Completo</ion-label>\n            <ion-input type="text" name="nomeEstagiario" [(ngModel)]="nomeEstagiario" formControlName="nome"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Matricula</ion-label>\n            <ion-input type="number" maxlength="10" name="numeroMatricula" [(ngModel)]="numeroMatricula" formControlName="matricula"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Telefone</ion-label>\n            <ion-input type="text" name="telefone" [(ngModel)]="telefone" [brmasker]="{mask:\'(00)00000-0000\', len:14}" formControlName="telefone"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" name="email" [(ngModel)]="email" formControlName="email"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <button type="button" (click)="cancelar()" ion-button color="danger">Cancelar</button>\n    <button type="submit" [disabled]="!cadastroEstagiario.valid" ion-button color="secondary">Confirmar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-estagiario\cadastrar-estagiario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_estagiario_estagiario__["a" /* CadastrarEstagiarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], CadastrarEstagiarioPage);
    return CadastrarEstagiarioPage;
}());

//# sourceMappingURL=cadastrar-estagiario.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarGrupoEstagiariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_estagiario_grupo_estagiario__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastrarGrupoEstagiariosPage = (function () {
    function CadastrarGrupoEstagiariosPage(navCtrl, provider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.checkItems = {};
        this.codigos = [];
        if (this.navParams.data.grupo) {
            this.grupos = [{ idgrupo: this.navParams.data.grupo.idgrupo, descricaogrupo: this.navParams.data.grupo.descricaogrupo }];
            this.grupo = this.grupos[0].idgrupo;
            this.idGrupoEditar = this.navParams.data.grupo.idgrupo;
            this.listarEstagiarioEditar(this.idGrupoEditar);
        }
    }
    CadastrarGrupoEstagiariosPage.prototype.ionViewDidLoad = function () {
        this.listarGrupo();
        this.listarEstagiario();
    };
    CadastrarGrupoEstagiariosPage.prototype.cadastrarGrupoEstagiario = function () {
        var _this = this;
        for (var _i = 0, _a = this.estagiarios; _i < _a.length; _i++) {
            var linha = _a[_i];
            if (linha.checked != "false" && linha.checked != false) {
                this.codigos.push(linha.idestagiario);
            }
        }
        this.provider.create({
            grupo: this.grupo,
            codigos: this.codigos
        }).then(function (result) {
            _this.showAlert();
        });
    };
    CadastrarGrupoEstagiariosPage.prototype.listarGrupo = function () {
        var _this = this;
        if (this.grupos == null) {
            this.provider.retornarGrupo().then(function (data) {
                _this.grupos = data;
            })
                .catch(function (error) { return alert(error); });
        }
    };
    CadastrarGrupoEstagiariosPage.prototype.listarEstagiario = function () {
        var _this = this;
        if (this.idGrupoEditar == null) {
            this.provider.retornarEstagiario().then(function (data) {
                _this.estagiarios = data;
            })
                .catch(function (error) { return alert(error); });
        }
    };
    CadastrarGrupoEstagiariosPage.prototype.listarEstagiarioEditar = function (idGrupo) {
        var _this = this;
        this.provider.retornarEstagiarioEditar({
            idGrupo: idGrupo
        }).then(function (data) {
            _this.estagiarios = data;
        })
            .catch(function (error) { return alert(error); });
    };
    CadastrarGrupoEstagiariosPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Grupo de estagiarios cadastrado com sucesso.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarGrupoEstagiariosPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastrarGrupoEstagiariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-grupo-estagiarios',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-grupo-estagiarios\cadastrar-grupo-estagiarios.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastrar grupo de estagiários</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-row>\n      <ion-item>\n        <ion-label floating>Selecione o Grupo:</ion-label>\n        <ion-select name="grupo" [(ngModel)]="grupo">\n          <ion-option *ngFor="let grupo of grupos" value="{{ grupo.idgrupo }}">{{ grupo.descricaogrupo }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <br />\n      <ion-item *ngFor="let estagiario of estagiarios" >\n        <ion-label>{{ estagiario.nomeestagiario }}</ion-label>\n        <ion-checkbox name="idEstagiario" [(ngModel)]="estagiario.checked" ></ion-checkbox>\n      </ion-item>\n    </ion-row>\n    <button ion-button color="danger" (click)="cancelar()">Cancelar</button>\n    <button ion-button color="secondary" (click)="cadastrarGrupoEstagiario()">Confirmar</button>\n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-grupo-estagiarios\cadastrar-grupo-estagiarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_grupo_estagiario_grupo_estagiario__["a" /* GrupoEstagiarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CadastrarGrupoEstagiariosPage);
    return CadastrarGrupoEstagiariosPage;
}());

//# sourceMappingURL=cadastrar-grupo-estagiarios.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrarGrupoPage = (function () {
    function CadastrarGrupoPage(navCtrl, navParams, http, alertCtrl, provider, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.provider = provider;
        this.formBuilder = formBuilder;
        this.cadastroGrupo = {};
        this.idGrupo = "";
        if (this.navParams.data.grupo) {
            this.grupo = this.navParams.data.grupo;
            console.log(this.grupo);
            var text = JSON.stringify(this.grupo);
            var obj = JSON.parse(text);
            this.descricao = obj.descricaogrupo;
            this.idGrupo = obj.idgrupo;
        }
        this.cadastroGrupo = formBuilder.group({
            descricao: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    CadastrarGrupoPage.prototype.cadastrarGrupo = function () {
        var _this = this;
        //campos
        this.provider.create({
            descricao: this.descricao,
            idGrupo: this.idGrupo
        }).then(function (result) {
            console.log(result);
            _this.showAlert();
        });
    };
    CadastrarGrupoPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Grupo cadastrado.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarGrupoPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastrarGrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-grupo',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-grupo\cadastrar-grupo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastro de grupo</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <form [formGroup]="cadastroGrupo" (ngSubmit)="cadastrarGrupo()" #f="ngForm">\n    <ion-item>\n      <ion-label floating>Descrição</ion-label>\n      <ion-input  name="descricao" [(ngModel)]="descricao" type="text" formControlName="descricao"></ion-input>\n    </ion-item>\n    <button type="button" (click)="cancelar()" ion-button color="danger">Cancelar</button>\n    <button type="submit" [disabled]="!cadastroGrupo.valid" ion-button color="secondary">Confirmar</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-grupo\cadastrar-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__["a" /* GrupoProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], CadastrarGrupoPage);
    return CadastrarGrupoPage;
}());

//# sourceMappingURL=cadastrar-grupo.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarGrupoEstagiariosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_grupo_estagiario_grupo_estagiario__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListarGrupoEstagiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListarGrupoEstagiariosPage = (function () {
    function ListarGrupoEstagiariosPage(navCtrl, provider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    ListarGrupoEstagiariosPage.prototype.ionViewWillEnter = function () {
        this.listarGrupoEstagiario();
    };
    ListarGrupoEstagiariosPage.prototype.filtrarItens = function (searchbar) {
        this.gruposEstagiarios = this.gruposEstagiariosSemFiltro;
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        console.log(this.gruposEstagiarios);
        this.gruposEstagiarios = this.gruposEstagiarios.filter(function (v) {
            if (v.descricaogrupo && q) {
                if (v.descricaogrupo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.gruposEstagiarios.length);
        console.log(q, this.estagiarios.length);
    };
    ListarGrupoEstagiariosPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__["a" /* CadastrarGrupoEstagiariosPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarGrupoEstagiariosPage.prototype.listarGrupoEstagiario = function () {
        var _this = this;
        this.provider.retornarGrupoEstagiario().then(function (data) {
            _this.gruposEstagiarios = data;
            _this.estagiarios = data;
            _this.gruposEstagiariosSemFiltro = data;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarGrupoEstagiariosPage.prototype.editar = function (grupo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__["a" /* CadastrarGrupoEstagiariosPage */], {
            rootNavCtrl: this.navCtrl,
            grupo: grupo
        });
    };
    ListarGrupoEstagiariosPage.prototype.excluir = function (idgrupo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esse grupo de estagiário?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirGrupoEstagiario({
                            idgrupo: idgrupo
                        }).then(function (result) {
                            _this.listarGrupoEstagiario();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarGrupoEstagiariosPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Grupo de estagiário excluído.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarGrupoEstagiariosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-grupo-estagiarios',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-grupo-estagiarios\listar-grupo-estagiarios.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Lista de grupo de estagiários</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid >\n      <ion-row>\n          <ion-col><h6>Grupos</h6></ion-col>\n          <ion-col><h6>Estagiários</h6></ion-col>\n          <ion-col><h6></h6></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let grupo of gruposEstagiarios">\n        <ion-col>{{ grupo.descricaogrupo }}</ion-col>\n        <ion-col>{{ grupo.nomes }}</ion-col>\n        <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(grupo)"></ion-icon>\n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(grupo.idgrupo)"></ion-icon>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-grupo-estagiarios\listar-grupo-estagiarios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_grupo_estagiario_grupo_estagiario__["a" /* GrupoEstagiarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListarGrupoEstagiariosPage);
    return ListarGrupoEstagiariosPage;
}());

//# sourceMappingURL=listar-grupo-estagiarios.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_grupo_cadastrar_grupo__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListarGrupoPage = (function () {
    function ListarGrupoPage(navCtrl, provider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    ListarGrupoPage.prototype.ionViewWillEnter = function () {
        this.listarGrupo();
    };
    ListarGrupoPage.prototype.filtrarItens = function (searchbar) {
        this.grupos = this.gruposSemFiltro;
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        console.log(this.grupos);
        this.grupos = this.grupos.filter(function (v) {
            if (v.descricaogrupo && q) {
                if (v.descricaogrupo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.grupos.length);
    };
    ListarGrupoPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_grupo_cadastrar_grupo__["a" /* CadastrarGrupoPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarGrupoPage.prototype.listarGrupo = function () {
        var _this = this;
        this.provider.retornarGrupo().then(function (data) {
            _this.grupos = data;
            _this.gruposSemFiltro = data;
            console.log(_this.grupos);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarGrupoPage.prototype.excluir = function (idGrupo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esse grupo?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirEstagiario({
                            idGrupo: idGrupo
                        }).then(function (result) {
                            _this.listarGrupo();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarGrupoPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Grupo excluído.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarGrupoPage.prototype.editar = function (grupo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_grupo_cadastrar_grupo__["a" /* CadastrarGrupoPage */], {
            rootNavCtrl: this.navCtrl,
            grupo: grupo
        });
    };
    ListarGrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-grupo',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-grupo\listar-grupo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de grupos</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid >\n      <ion-row>\n        <ion-col><h6>Descrição</h6></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let grupo of grupos">\n        <ion-col>{{grupo.descricaogrupo}}</ion-col>  \n        <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(grupo)"></ion-icon>\n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(grupo.idgrupo)"></ion-icon>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-grupo\listar-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_grupo_grupo__["a" /* GrupoProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListarGrupoPage);
    return ListarGrupoPage;
}());

//# sourceMappingURL=listar-grupo.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarPacientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pre_cadastro_pre_cadastro__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pre_cadastro_pre_cadastro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__finalizar_pre_cadastro_finalizar_pre_cadastro__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ListarPacientesPage = (function () {
    function ListarPacientesPage(navCtrl, navParams, provider, actionSheetCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ListarPacientesPage.prototype.ionViewWillEnter = function () {
        this.listarPacientes();
    };
    ListarPacientesPage.prototype.visualizar = function (paciente) {
        var valor = JSON.parse(JSON.stringify(paciente));
        var mensagem = "CPF: " + valor.cpfpaciente + "\n"
            + "RG: " + valor.rgpaciente + "\n"
            + "Endereço: " + valor.enderecopaciente + ", " + valor.numeropaciente + "\n"
            + "Bairro: " + valor.bairropaciente + "\n"
            + "Cidade: " + valor.cidadepaciente + "\n"
            + "Telefone 2: " + valor.telefone2 + "\n";
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'botton'
        });
        toast.present();
    };
    ListarPacientesPage.prototype.filtrarItens = function (searchbar) {
        this.pacientes = this.listarPacientesF;
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.pacientes = this.pacientes.filter(function (v) {
            if (v.nomepaciente && q) {
                if (v.nomepaciente.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    ListarPacientesPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pre_cadastro_pre_cadastro__["a" /* PreCadastroPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarPacientesPage.prototype.listarPacientes = function () {
        var _this = this;
        this.provider.retornarPacientes().then(function (data) {
            _this.pacientes = data;
            _this.listarPacientesF = data;
        })
            .catch(function (error) { return alert(error); });
    };
    ListarPacientesPage.prototype.excluir = function (idPaciente) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Reprovar!',
            message: 'Deseja reprovar este paciente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Reprovar',
                    handler: function () {
                        _this.provider.excluirPaciente({
                            idPaciente: idPaciente
                        }).then(function (result) {
                            _this.listarPacientes();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarPacientesPage.prototype.finalizar = function (paciente) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Aprovar paciente!',
            message: 'Deseja revisar as informações e aprovar este paciente?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Sim',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__finalizar_pre_cadastro_finalizar_pre_cadastro__["a" /* FinalizarPreCadastroPage */], {
                            rootNavCtrl: _this.navCtrl,
                            paciente: paciente
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarPacientesPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Paciente reprovado.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarPacientesPage.prototype.visualizarEnc = function (anexo) {
        window.open(anexo, 'blank');
    };
    ListarPacientesPage.prototype.classeIcone = function (classe) {
        var valor = "ocultar";
        if (classe = "mostrar") {
            valor = "mostrar";
        }
        return valor;
    };
    ListarPacientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-pacientes',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-pacientes\listar-pacientes.html"*/'<ion-header>  \n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de pacientes</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Pré Cadastro</button>\n  <ion-grid>\n      <ion-row>\n        <ion-col><h6>Nome</h6></ion-col>\n        <ion-col><h6>Data de Nascimento</h6></ion-col>\n        <ion-col><h6>Telefone</h6></ion-col>\n        <ion-col><h6>Especialidade</h6></ion-col>\n        <ion-col><h6>Renda</h6></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let paciente of pacientes">\n          <ion-col>{{paciente.nomepaciente}}</ion-col>\n          <ion-col>{{paciente.datanascpaciente | date: \'dd/MM/yyyy\'}}</ion-col>\n          <ion-col>{{paciente.contato1paciente}}</ion-col>          \n          <ion-col>{{paciente.descricaoespecialidade}}</ion-col>\n          <ion-col>{{paciente.rendapaciente}}</ion-col>          \n          <ion-col class="iconeDireita">                            \n            <ion-icon md="md-document" title="Encaminhamento Médico" [ngStyle]="{\'display\': paciente.classeenc}" (click)="visualizarEnc(paciente.encmedpaciente)"></ion-icon>          \n            <ion-icon md="md-eye" title="visualizar" (click)="visualizar(paciente)"></ion-icon>          \n            <ion-icon md="md-checkmark" title="Aprovar paciente" (click)="finalizar(paciente)"></ion-icon>          \n            <ion-icon md="md-close" title="Reprovar paciente" (click)="excluir(paciente.idpaciente)"></ion-icon>          \n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-pacientes\listar-pacientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pre_cadastro_pre_cadastro__["a" /* PreCadastroProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ListarPacientesPage);
    return ListarPacientesPage;
}());

//# sourceMappingURL=listar-pacientes.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarProfessoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_professor_cadastrar_professor__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_professor_professor__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListarProfessoresPage = (function () {
    function ListarProfessoresPage(alertCtrl, navCtrl, navParams, provider) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.listarProfessor();
        this.listarEspecialidade();
    }
    ListarProfessoresPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarProfessoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListarProfessoresPage');
    };
    ListarProfessoresPage.prototype.listarProfessor = function () {
        var _this = this;
        this.provider.retornarProfessor().then(function (data) {
            _this.professores = data;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarProfessoresPage.prototype.listarEspecialidade = function () {
        var _this = this;
        this.provider.listar().then(function (data) {
            _this.especialidades = data;
            //console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarProfessoresPage.prototype.excluirProfessor = function (idprofessor) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esse professor?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirProfessor({
                            idProfessor: idprofessor
                        }).then(function (result) {
                            _this.listarProfessor();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarProfessoresPage.prototype.editar = function (professor) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */], {
            rootNavCtrl: this.navCtrl,
            professor: professor
        });
    };
    ListarProfessoresPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Professor excluído.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarProfessoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-professores',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-professores\listar-professores.html"*/'<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Listar Professores</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-searchbar\n    [(ngModel)]="myInput"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="selecionarProfessor(nomeprofessor)"\n    (ionCancel)="onCancel($event)">\n  </ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid>\n      <ion-row>\n        <ion-col><h6>Nome </h6></ion-col>\n        <ion-col><h6>Matrícula</h6></ion-col>\n        <ion-col><h6>Crefito</h6></ion-col>\n        <ion-col><h6>Telefone</h6></ion-col>\n        <ion-col><h6>E-mail</h6></ion-col>\n        <ion-col><h6>Área de Especialidade</h6></ion-col>\n        <ion-col></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let job of professores"> \n          <ion-col>{{job.nomeprofessor}}</ion-col>\n          <ion-col>{{job.matriculaprofessor}}</ion-col>\n          <ion-col>{{job.crefitoprofessor}}</ion-col>\n          <ion-col>{{job.telefoneprofessor}}</ion-col>\n          <ion-col>{{job.emailprofessor}}</ion-col>\n          <ion-col>{{job.descricaoespecialidade}}</ion-col>\n          \n          <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(job)"></ion-icon>\n          </ion-col>\n          <ion-col class="iconeEsquerda">\n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluirProfessor(job.idprofessor)"></ion-icon>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-professores\listar-professores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_professor_professor__["a" /* ProfessorProvider */]])
    ], ListarProfessoresPage);
    return ListarProfessoresPage;
}());

//# sourceMappingURL=listar-professores.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatarProblemaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_problema_problema__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelatarProblemaPage = (function () {
    function RelatarProblemaPage(navCtrl, navParams, alertCtrl, http, formBuilder, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.relatoProblema = {};
        this.idProblema = "";
        if (this.navParams.data.problema) {
            this.problemas = this.navParams.data.problema;
            console.log(this.problemas);
            var text = JSON.stringify(this.problemas);
            var obj = JSON.parse(text);
            this.assuntoProblema = obj.assuntoproblema;
            this.descricaoProblema = obj.descricaoproblema;
            this.idProblema = obj.idproblema;
        }
        this.relatoProblema = formBuilder.group({
            assunto: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            descricao: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    RelatarProblemaPage.prototype.relatarProblema = function () {
        this.provider.create({
            assuntoProblema: this.assuntoProblema,
            descricaoProblema: this.descricaoProblema,
            idProblema: this.idProblema
        });
        console.log(this.descricaoProblema);
        this.showAlert();
    };
    RelatarProblemaPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Reclamação enviada.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    RelatarProblemaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    RelatarProblemaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-relatar-problema',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\relatar-problema\relatar-problema.html"*/'<ion-header>\n\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Ouvidoria</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <form [formGroup]= "relatoProblema" (ngSubmit)="relatarProblema()" #f="ngForm" >\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Assunto</ion-label>\n              <ion-input type="text" name="assuntoProblema" [(ngModel)]="assuntoProblema" formControlName="assunto"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating>Descrição Detalhada</ion-label>\n              <ion-textarea type="text" name="descricaoProblema" rows="5" [(ngModel)]="descricaoProblema" formControlName="descricao"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <button type="button" (click)="cancelar()" ion-button color="danger">Cancelar</button>\n      <button type="submit" [disabled]="!relatoProblema.valid" ion-button color="secondary">Confirmar</button>\n    </form>\n  </ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\relatar-problema\relatar-problema.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_problema_problema__["a" /* RelatarProblemaProvider */]])
    ], RelatarProblemaPage);
    return RelatarProblemaPage;
}());

//# sourceMappingURL=relatar-problema.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastrar-especialidade/cadastrar-especialidade.module": [
		490,
		10
	],
	"../pages/cadastrar-estagiario/cadastrar-estagiario.module": [
		491,
		9
	],
	"../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios.module": [
		492,
		8
	],
	"../pages/cadastrar-grupo/cadastrar-grupo.module": [
		493,
		7
	],
	"../pages/cadastrar-horario-professor/cadastrar-horario-professor.module": [
		220
	],
	"../pages/cadastrar-professor/cadastrar-professor.module": [
		494,
		6
	],
	"../pages/cadastro-semestre/cadastro-semestre.module": [
		222
	],
	"../pages/fila-de-espera/fila-de-espera.module": [
		224
	],
	"../pages/finalizar-pre-cadastro/finalizar-pre-cadastro.module": [
		226
	],
	"../pages/listar-grupo-estagiarios/listar-grupo-estagiarios.module": [
		495,
		5
	],
	"../pages/listar-grupo/listar-grupo.module": [
		496,
		4
	],
	"../pages/listar-pacientes/listar-pacientes.module": [
		497,
		3
	],
	"../pages/listar-professores/listar-professores.module": [
		498,
		2
	],
	"../pages/listar-semestre/listar-semestre.module": [
		240
	],
	"../pages/pre-cadastro/pre-cadastro.module": [
		242
	],
	"../pages/relatar-problema/relatar-problema.module": [
		499,
		1
	],
	"../pages/reservar-sala/reservar-sala.module": [
		244
	],
	"../pages/sortear-paciente-grupo/sortear-paciente-grupo.module": [
		500,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastrarHorarioProfessorPageModule", function() { return CadastrarHorarioProfessorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_horario_professor__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastrarHorarioProfessorPageModule = (function () {
    function CadastrarHorarioProfessorPageModule() {
    }
    CadastrarHorarioProfessorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastrar_horario_professor__["a" /* CadastrarHorarioProfessorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastrar_horario_professor__["a" /* CadastrarHorarioProfessorPage */]),
            ],
        })
    ], CadastrarHorarioProfessorPageModule);
    return CadastrarHorarioProfessorPageModule;
}());

//# sourceMappingURL=cadastrar-horario-professor.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarHorarioProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CadastrarHorarioProfessorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastrarHorarioProfessorPage = (function () {
    function CadastrarHorarioProfessorPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CadastrarHorarioProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarHorarioProfessorPage');
    };
    CadastrarHorarioProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-horario-professor',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-horario-professor\cadastrar-horario-professor.html"*/'<!--\n  Generated template for the CadastrarHorarioProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastrar Horário de Professores</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-row>\n    <ion-col width-50>\n      <ion-item>\n        <ion-label floating>Professor(a)</ion-label>\n        <ion-select name="professor" [(ngModel)]="professor">\n          <!-- <ion-option *ngFor="let especialidade of especialidades" value="{{ especialidade.codigoespecialidade }}">{{ especialidade.descricaoespecialidade }}</ion-option> -->\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col width-25>\n      <ion-item>\n        <ion-label floating>Dia da Semana</ion-label>\n        <ion-select name="diaSemana" [(ngModel)]="diaSemana">\n          <ion-option value="Seg">Segunda-Feira</ion-option>\n          <ion-option value="Ter">Terça-Feira</ion-option>\n          <ion-option value="Qua">Quarta-Feira</ion-option>\n          <ion-option value="Qui">Quinta-Feira</ion-option>\n          <ion-option value="Sex">Sexta-Feira</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col width-25>\n      <ion-item>\n        <ion-label floating>Hora Inicio</ion-label>\n        <ion-select name="horaInicio" [(ngModel)]="horaInicio">\n          <ion-option value="atendUm">8:00</ion-option>\n          <ion-option value="atendDois">9:00</ion-option>\n          <ion-option value="atendTres">10:00</ion-option>\n          <ion-option value="atendQuatro">11:00</ion-option>\n          <ion-option value="atendCinco">13:30</ion-option>\n          <ion-option value="atendSeis">14:30</ion-option>\n          <ion-option value="atendSete">15:30</ion-option>\n          <ion-option value="atendOito">16:30</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n    <ion-col width-25>\n      <ion-item>\n        <ion-label floating>Hora Fim</ion-label>\n        <ion-select name="horaFim" [(ngModel)]="horaFim">\n          <ion-option value="atendUm">9:00</ion-option>\n          <ion-option value="atendDois">10:00</ion-option>\n          <ion-option value="atendTres">11:00</ion-option>\n          <ion-option value="atendQuatro">12:00</ion-option>\n          <ion-option value="atendCinco">14:30</ion-option>\n          <ion-option value="atendSeis">15:30</ion-option>\n          <ion-option value="atendSete">16:30</ion-option>\n          <ion-option value="atendOito">17:30</ion-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col width-25>\n      <button ion-button float-right (click)="incluir()">Adicionar</button>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col><h6>Dia da Semana</h6></ion-col>\n    <ion-col><h6>Hora Inicio</h6></ion-col>\n    <ion-col><h6>Hora Fim</h6></ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <button ion-button color="danger" menuToggle="left">Cancelar</button>\n  <button ion-button color="secondary">Confirmar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-horario-professor\cadastrar-horario-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CadastrarHorarioProfessorPage);
    return CadastrarHorarioProfessorPage;
}());

//# sourceMappingURL=cadastrar-horario-professor.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroSemestrePageModule", function() { return CadastroSemestrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_semestre__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroSemestrePageModule = (function () {
    function CadastroSemestrePageModule() {
    }
    CadastroSemestrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro_semestre__["a" /* CadastroSemestrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro_semestre__["a" /* CadastroSemestrePage */]),
            ],
        })
    ], CadastroSemestrePageModule);
    return CadastroSemestrePageModule;
}());

//# sourceMappingURL=cadastro-semestre.module.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroSemestrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_semestre_semestre__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastroSemestrePage = (function () {
    function CadastroSemestrePage(navCtrl, provider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.idSemestre = "";
        if (this.navParams.data.semestre) {
            this.semestres = this.navParams.data.semestre;
            var text = JSON.stringify(this.semestres);
            var obj = JSON.parse(text);
            this.nomeSemestre = obj.nomesemestre;
            this.dataInicioSemestre = obj.datainiciosemestre;
            this.dataFimSemestre = obj.datafimsemestre;
            this.idSemestre = obj.idsemestre;
        }
    }
    CadastroSemestrePage.prototype.cadastrarSemestre = function () {
        var _this = this;
        if (this.dataValida()) {
            this.provider.create({
                nomeSemestre: this.nomeSemestre,
                dataInicioSemestre: this.dataInicioSemestre,
                dataFimSemestre: this.dataFimSemestre,
                idSemestre: this.idSemestre
            }).then(function (result) {
                _this.showAlert();
            });
        }
    };
    CadastroSemestrePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Semestre gravado.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastroSemestrePage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    CadastroSemestrePage.prototype.dataValida = function () {
        var valido = true;
        if (this.dataInicioSemestre > this.dataFimSemestre) {
            valido = false;
            var alert_1 = this.alertCtrl.create({
                title: 'Atenção!',
                subTitle: 'A data inicial não pode ser maior que a data final.',
                buttons: ['Ok']
            });
            alert_1.present();
        }
        return valido;
    };
    CadastroSemestrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastro-semestre',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastro-semestre\cadastro-semestre.html"*/'<!--\n  Generated template for the CadastroSemestrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastrar Semestre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="cadastrarSemestre()" #f="ngForm" >\n    <ion-row>\n      <ion-item>\n        <ion-label name="nomeSemestre" floating>Nome Semestre</ion-label>\n        <ion-input name="nomeSemestre" [(ngModel)]="nomeSemestre" type="text"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-col width-50>\n        <ion-item>\n          <ion-label floating>Inicio do Semestre</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" name="dataInicioSemestre" [(ngModel)]="dataInicioSemestre"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col width-50>\n        <ion-item>\n          <ion-label floating>Fim do Semestre</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" name="dataFimSemestre" [(ngModel)]="dataFimSemestre" ></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <button type="button" ion-button color="danger" (click)="cancelar()">Cancelar</button>\n    <button type="submit" ion-button color="secondary">Confirmar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastro-semestre\cadastro-semestre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_semestre_semestre__["a" /* SemestreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CadastroSemestrePage);
    return CadastroSemestrePage;
}());

//# sourceMappingURL=cadastro-semestre.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilaDeEsperaPageModule", function() { return FilaDeEsperaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fila_de_espera__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FilaDeEsperaPageModule = (function () {
    function FilaDeEsperaPageModule() {
    }
    FilaDeEsperaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fila_de_espera__["a" /* FilaDeEsperaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fila_de_espera__["a" /* FilaDeEsperaPage */]),
            ],
        })
    ], FilaDeEsperaPageModule);
    return FilaDeEsperaPageModule;
}());

//# sourceMappingURL=fila-de-espera.module.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilaDeEsperaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pre_cadastro_pre_cadastro__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilaDeEsperaPage = (function () {
    function FilaDeEsperaPage(navCtrl, navParams, provider, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    FilaDeEsperaPage.prototype.ionViewWillEnter = function () {
        this.listarPacientes();
    };
    FilaDeEsperaPage.prototype.filtrarItens = function (searchbar) {
        this.pacientes = this.listarPacientesF;
        var q = searchbar.srcElement.value;
        if (!q) {
            return;
        }
        this.pacientes = this.pacientes.filter(function (v) {
            if (v.nomepaciente && q) {
                if (v.nomepaciente.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
    };
    FilaDeEsperaPage.prototype.listarPacientes = function () {
        var _this = this;
        this.provider.retornarPacientesFila().then(function (data) {
            console.log(data);
            _this.pacientes = data;
            _this.listarPacientesF = data;
        })
            .catch(function (error) { return alert(error); });
    };
    FilaDeEsperaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-fila-de-espera',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\fila-de-espera\fila-de-espera.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Fila de Espera</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>    \n  <ion-grid>\n      <ion-row>\n        <ion-col><h6>Nome</h6></ion-col>\n        <ion-col><h6>Data de Nascimento</h6></ion-col>\n        <ion-col><h6>Telefone</h6></ion-col>\n        <ion-col><h6>Especialidade</h6></ion-col>\n        <ion-col><h6>Renda</h6></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let paciente of pacientes">\n          <ion-col>{{paciente.nomepaciente}}</ion-col>\n          <ion-col>{{paciente.datanascpaciente | date: \'dd/MM/yyyy\'}}</ion-col>\n          <ion-col>{{paciente.contato1paciente}}</ion-col>          \n          <ion-col>{{paciente.descricaoespecialidade}}</ion-col>\n          <ion-col>{{paciente.rendapaciente}}</ion-col>          \n          <ion-col class="iconeDireita">               \n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\fila-de-espera\fila-de-espera.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_pre_cadastro_pre_cadastro__["a" /* PreCadastroProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], FilaDeEsperaPage);
    return FilaDeEsperaPage;
}());

//# sourceMappingURL=fila-de-espera.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalizarPreCadastroPageModule", function() { return FinalizarPreCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finalizar_pre_cadastro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FinalizarPreCadastroPageModule = (function () {
    function FinalizarPreCadastroPageModule() {
    }
    FinalizarPreCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__finalizar_pre_cadastro__["a" /* FinalizarPreCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__finalizar_pre_cadastro__["a" /* FinalizarPreCadastroPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], FinalizarPreCadastroPageModule);
    return FinalizarPreCadastroPageModule;
}());

//# sourceMappingURL=finalizar-pre-cadastro.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArquivosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArquivosProvider = (function () {
    function ArquivosProvider() {
    }
    ArquivosProvider.prototype.upload = function (arquivo) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["storage"]().ref();
        var uploadTask = storageRef.child("anexos/" + this.guid()).put(arquivo);
        return uploadTask.then(function (snapshot) {
            return snapshot.downloadURL;
        });
    };
    ArquivosProvider.prototype.guid = function () {
        var s4 = function () {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        };
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    ArquivosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], ArquivosProvider);
    return ArquivosProvider;
}());

//# sourceMappingURL=arquivos.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListarSemestrePageModule", function() { return ListarSemestrePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listar_semestre__ = __webpack_require__(241);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListarSemestrePageModule = (function () {
    function ListarSemestrePageModule() {
    }
    ListarSemestrePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__listar_semestre__["a" /* ListarSemestrePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__listar_semestre__["a" /* ListarSemestrePage */]),
            ],
        })
    ], ListarSemestrePageModule);
    return ListarSemestrePageModule;
}());

//# sourceMappingURL=listar-semestre.module.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarSemestrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro_semestre_cadastro_semestre__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_semestre_semestre__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListarSemestrePage = (function () {
    function ListarSemestrePage(navCtrl, provider, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
    }
    ListarSemestrePage.prototype.ionViewWillEnter = function () {
        this.listarSemestre();
    };
    ListarSemestrePage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_semestre_cadastro_semestre__["a" /* CadastroSemestrePage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarSemestrePage.prototype.editar = function (semestre) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastro_semestre_cadastro_semestre__["a" /* CadastroSemestrePage */], {
            rootNavCtrl: this.navCtrl,
            semestre: semestre
        });
    };
    ListarSemestrePage.prototype.listarSemestre = function () {
        var _this = this;
        this.provider.retornarEstagiario().then(function (data) {
            _this.semestres = data;
        })
            .catch(function (error) { return alert(error); });
    };
    ListarSemestrePage.prototype.excluir = function (idSemestre) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esse semestre?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirEstagiario({
                            idSemestre: idSemestre
                        }).then(function (result) {
                            _this.listarSemestre();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarSemestrePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Semestre excluído.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarSemestrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-semestre',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-semestre\listar-semestre.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de semestres</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid>\n    <ion-row>\n      <ion-col><h6>Descrição</h6></ion-col>\n      <ion-col><h6>Data Inicio</h6></ion-col>\n      <ion-col><h6>Data Fim</h6></ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n    <ion-row *ngFor="let semestre of semestres">\n        <ion-col>{{semestre.nomesemestre}}</ion-col>\n        <ion-col>{{semestre.datainiciosemestre | date: \'dd/MM/yyyy\'}}</ion-col>\n        <ion-col>{{semestre.datafimsemestre | date: \'dd/MM/yyyy\'}}</ion-col>\n        <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(semestre)"></ion-icon>          \n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(semestre.idsemestre)"></ion-icon>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-semestre\listar-semestre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_semestre_semestre__["a" /* SemestreProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListarSemestrePage);
    return ListarSemestrePage;
}());

//# sourceMappingURL=listar-semestre.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreCadastroPageModule", function() { return PreCadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_cadastro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PreCadastroPageModule = (function () {
    function PreCadastroPageModule() {
    }
    PreCadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pre_cadastro__["a" /* PreCadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pre_cadastro__["a" /* PreCadastroPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], PreCadastroPageModule);
    return PreCadastroPageModule;
}());

//# sourceMappingURL=pre-cadastro.module.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatarProblemaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RelatarProblemaProvider = (function () {
    function RelatarProblemaProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    /*
    assuntoproblema: any;
    descricaoproblema: any;*/
    RelatarProblemaProvider.prototype.push = function (arg0) {
        throw new Error("Method not implemented.");
    };
    RelatarProblemaProvider.prototype.create = function (problema) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/problema/relatarProblema', problema).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Nav */])
    ], RelatarProblemaProvider.prototype, "nav", void 0);
    RelatarProblemaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], RelatarProblemaProvider);
    return RelatarProblemaProvider;
}());

//# sourceMappingURL=problema.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservarSalaPageModule", function() { return ReservarSalaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservar_sala__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReservarSalaPageModule = (function () {
    function ReservarSalaPageModule() {
    }
    ReservarSalaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reservar_sala__["a" /* ReservarSalaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reservar_sala__["a" /* ReservarSalaPage */]),
            ],
        })
    ], ReservarSalaPageModule);
    return ReservarSalaPageModule;
}());

//# sourceMappingURL=reservar-sala.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservarSalaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reserva_sala_reserva_sala__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservarSalaPage = (function () {
    function ReservarSalaPage(navCtrl, navParams, alertCtrl, http, formBuilder, provider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.formBuilder = formBuilder;
        this.provider = provider;
        this.reservaForm = {};
        this.idReserva = "";
        if (this.navParams.data.reserva) {
            this.reservas = this.navParams.data.reserva;
            console.log(this.reservas);
            var text = JSON.stringify(this.reservas);
            var obj = JSON.parse(text);
            this.solicitante = obj.solicitante;
            this.salaReserva = obj.salareserva;
            this.dataReserva = obj.datareserva;
            this.idReserva = obj.idreserva;
        }
        this.reservaForm = formBuilder.group({
            solicitante: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            salaReserva: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            dataReserva: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    ReservarSalaPage.prototype.reservarSala = function () {
        this.provider.create({
            solicitante: this.solicitante,
            salaReserva: this.salaReserva,
            dataReserva: this.dataReserva,
            idReserva: this.idReserva
        });
        this.showAlert();
    };
    ReservarSalaPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Reserva gravada.',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    ReservarSalaPage.prototype.cancelar = function () {
        this.navCtrl.pop();
    };
    ReservarSalaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-reservar-sala',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\reservar-sala\reservar-sala.html"*/'<!--\n  Generated template for the ReservarSalaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reservar Sala</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]= "reservaForm" (ngSubmit)="reservarSala()" #f="ngForm" >\n    <ion-row>\n      <ion-col>\n        <ion-item>\n            <ion-label floating>Solicitante</ion-label>\n            <ion-input type="text" name="solicitante" [(ngModel)]="solicitante" formControlName="solicitante"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n      <ion-col width-50>\n        <ion-item>\n          <ion-label floating>Selecione a Sala</ion-label>\n          <ion-select name="salaReserva"[(ngModel)]="salaReserva" formControlName="salaReserva">\n            <ion-option value="fisioterapia">Fisioterapia</ion-option>\n            <ion-option value="estetica">Estética</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col width-50>\n        <ion-item>\n            <ion-label floating>Selecione a data</ion-label>\n            <ion-datetime name="dataReserva" displayFormat="DD/MM/YYYY" [(ngModel)]="dataReserva" formControlName="dataReserva"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <button type="button" (click)="cancelar()" ion-button color="danger">Cancelar</button>\n    <button type="submit" [disabled]="!reservaForm.valid" ion-button color="secondary">Confirmar</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\reservar-sala\reservar-sala.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__providers_reserva_sala_reserva_sala__["a" /* ReservaSalaProvider */]])
    ], ReservarSalaPage);
    return ReservarSalaPage;
}());

//# sourceMappingURL=reservar-sala.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Clínica escola de fisioterapia</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button> -->\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarEstagiarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_estagiario_cadastrar_estagiario__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_estagiario_estagiario__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var ListarEstagiarioPage = (function () {
    function ListarEstagiarioPage(navCtrl, navParams, provider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
    }
    ListarEstagiarioPage.prototype.ionViewWillEnter = function () {
        this.listarEstagiario();
    };
    ListarEstagiarioPage.prototype.filtrarItens = function (searchbar) {
        // Reset items back to all of the items
        this.estagiarios = this.estagiariosSemFiltro;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.estagiarios = this.estagiarios.filter(function (v) {
            if (v.nomeestagiario && q) {
                if (v.nomeestagiario.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.estagiarios.length);
    };
    ListarEstagiarioPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_estagiario_cadastrar_estagiario__["a" /* CadastrarEstagiarioPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarEstagiarioPage.prototype.editar = function (estagiario) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_estagiario_cadastrar_estagiario__["a" /* CadastrarEstagiarioPage */], {
            rootNavCtrl: this.navCtrl,
            estagiario: estagiario
        });
    };
    ListarEstagiarioPage.prototype.excluir = function (idEstagiario) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esse estagiário?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirEstagiario({
                            idEstagiario: idEstagiario
                        }).then(function (result) {
                            _this.listarEstagiario();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarEstagiarioPage.prototype.listarEstagiario = function () {
        var _this = this;
        this.provider.retornarEstagiario().then(function (data) {
            _this.estagiarios = data;
            _this.estagiariosSemFiltro = _this.estagiarios;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarEstagiarioPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Estagiário excluído.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarEstagiarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-estagiario',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-estagiario\listar-estagiario.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de estágiarios</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid>\n      <ion-row>\n        <ion-col><h6>Nome</h6></ion-col>\n        <ion-col><h6>Matrícula</h6></ion-col>\n        <ion-col><h6>Telefone</h6></ion-col>\n        <ion-col><h6>Email</h6></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let estagiario of estagiarios">\n          <ion-col>{{estagiario.nomeestagiario}}</ion-col>\n          <ion-col>{{estagiario.matriculaestagiario}}</ion-col>\n          <ion-col>{{estagiario.telefoneestagiario}}</ion-col>\n          <ion-col>{{estagiario.emailestagiario}}</ion-col>\n          <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(estagiario)"></ion-icon>          \n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(estagiario.idestagiario)"></ion-icon>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-estagiario\listar-estagiario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_estagiario_estagiario__["a" /* CadastrarEstagiarioProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListarEstagiarioPage);
    return ListarEstagiarioPage;
}());

//# sourceMappingURL=listar-estagiario.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarEspecialidadePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_especialidade_cadastrar_especialidade__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_especialidade_especialidade__ = __webpack_require__(113);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var ListarEspecialidadePage = (function () {
    function ListarEspecialidadePage(navCtrl, navParams, provider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
    }
    ListarEspecialidadePage.prototype.ionViewWillEnter = function () {
        this.listarEspecialidade();
    };
    ListarEspecialidadePage.prototype.filtrarItens = function (searchbar) {
        // Reset items back to all of the items
        this.especialidades = this.especialidadesSemFiltro;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.especialidades = this.especialidades.filter(function (v) {
            if (v.descricaoespecialidade && q) {
                if (v.descricaoespecialidade.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.especialidades.length);
    };
    ListarEspecialidadePage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_especialidade_cadastrar_especialidade__["a" /* CadastrarEspecialidadePage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarEspecialidadePage.prototype.editar = function (especialidade) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_especialidade_cadastrar_especialidade__["a" /* CadastrarEspecialidadePage */], {
            rootNavCtrl: this.navCtrl,
            especialidade: especialidade
        });
    };
    ListarEspecialidadePage.prototype.excluir = function (codigoEspecialidade) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esta especialidade?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirEspecialidade({
                            codigoEspecialidade: codigoEspecialidade
                        }).then(function (result) {
                            _this.listarEspecialidade();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarEspecialidadePage.prototype.listarEspecialidade = function () {
        var _this = this;
        this.provider.retornarEspecialidade().then(function (data) {
            _this.especialidades = data;
            _this.especialidadesSemFiltro = _this.especialidades;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarEspecialidadePage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Especialidade excluída.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarEspecialidadePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-especialidade',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-especialidade\listar-especialidade.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Lista de especialidades</ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content padding>\n      <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n    <button ion-button float-right (click)="incluir()">Adicionar</button>\n    <ion-grid>\n        <ion-row>\n          <ion-col><h6>Descrição</h6></ion-col>\n          <ion-col></ion-col>\n        </ion-row>\n        <ion-row *ngFor="let especialidade of especialidades">\n            <ion-col>{{especialidade.descricaoespecialidade}}</ion-col>\n            <ion-col class="iconeDireita">\n              <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(especialidade)"></ion-icon>\n              <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(especialidade.codigoespecialidade)"></ion-icon>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n  </ion-content>\n  \n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-especialidade\listar-especialidade.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_especialidade_especialidade__["a" /* CadastrarEspecialidadeProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListarEspecialidadePage);
    return ListarEspecialidadePage;
}());

//# sourceMappingURL=listar-especialidade.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarReservasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reservar_sala_reservar_sala__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reserva_sala_reserva_sala__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//@IonicPage()
var ListarReservasPage = (function () {
    function ListarReservasPage(navCtrl, navParams, provider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.alertCtrl = alertCtrl;
    }
    ListarReservasPage.prototype.ionViewWillEnter = function () {
        this.listarReservasSala();
    };
    ListarReservasPage.prototype.filtrarItens = function (searchbar) {
        // Reset items back to all of the items
        this.reservas = this.reservasSemFiltro;
        // set q to the value of the searchbar
        var q = searchbar.srcElement.value;
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.reservas = this.reservas.filter(function (v) {
            if (v.solicitante && q) {
                if (v.solicitante.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.reservas.length);
    };
    ListarReservasPage.prototype.incluir = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservar_sala_reservar_sala__["a" /* ReservarSalaPage */], {
            rootNavCtrl: this.navCtrl
        });
    };
    ListarReservasPage.prototype.editar = function (reserva) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reservar_sala_reservar_sala__["a" /* ReservarSalaPage */], {
            rootNavCtrl: this.navCtrl,
            reserva: reserva
        });
    };
    ListarReservasPage.prototype.excluir = function (idReserva) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Excluir!',
            message: 'Deseja excluir esta reserva?',
            buttons: [
                {
                    text: 'Não',
                    role: 'cancel'
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.provider.excluirReservaSala({
                            idReserva: idReserva
                        }).then(function (result) {
                            _this.listarReservasSala();
                            _this.showAlert();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ListarReservasPage.prototype.listarReservasSala = function () {
        var _this = this;
        this.provider.retornarReservaSala().then(function (data) {
            _this.reservas = data;
            _this.reservasSemFiltro = _this.reservas;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    ListarReservasPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Reserva excluída.',
            buttons: ['Ok']
        });
        alert.present();
    };
    ListarReservasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-listar-reserva-salas',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-reserva-salas\listar-reserva-salas.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Lista de reserva de salas</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <ion-searchbar (ionInput)="filtrarItens($event)"></ion-searchbar>\n  <button ion-button float-right (click)="incluir()">Adicionar</button>\n  <ion-grid>\n      <ion-row>\n        <ion-col><h6>Solicitante</h6></ion-col>\n        <ion-col><h6>Sala reserva</h6></ion-col>\n        <ion-col><h6>Data reserva</h6></ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row *ngFor="let reserva of reservas">\n          <ion-col>{{reserva.solicitante}}</ion-col>\n          <ion-col>{{reserva.salareserva}}</ion-col>\n          <ion-col>{{reserva.datareserva | date: \'dd/MM/yyyy\'}}</ion-col>\n          <ion-col class="iconeDireita">\n            <ion-icon ios="ios-create" md="md-create" title="Editar" (click)="editar(reserva)"></ion-icon>          \n            <ion-icon ios="ios-trash" md="md-trash" title="Excluir" (click)="excluir(reserva.idreserva)"></ion-icon>\n          </ion-col>\n      </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\listar-reserva-salas\listar-reserva-salas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reserva_sala_reserva_sala__["a" /* ReservaSalaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListarReservasPage);
    return ListarReservasPage;
}());

//# sourceMappingURL=listar-reserva-salas.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortearPacienteGrupoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SortearPacienteGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortearPacienteGrupoPage = (function () {
    function SortearPacienteGrupoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SortearPacienteGrupoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SortearPacienteGrupoPage');
    };
    SortearPacienteGrupoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-sortear-paciente-grupo',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\sortear-paciente-grupo\sortear-paciente-grupo.html"*/'<!--\n  Generated template for the SortearPacienteGrupoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sortear Paciente Grupo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\sortear-paciente-grupo\sortear-paciente-grupo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SortearPacienteGrupoPage);
    return SortearPacienteGrupoPage;
}());

//# sourceMappingURL=sortear-paciente-grupo.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_pre_cadastro_pre_cadastro_module__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_reservar_sala_reservar_sala_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_especialidade_cadastrar_especialidade__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_especialidade_especialidade__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cadastrar_estagiario_cadastrar_estagiario__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_estagiario_estagiario__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_pre_cadastro_finalizar_pre_cadastro_module__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_finalizar_pre_cadastro_finalizar_pre_cadastro__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cadastrar_professor_cadastrar_professor__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_cadastrar_grupo_cadastrar_grupo__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_relatar_problema_relatar_problema__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_sortear_paciente_grupo_sortear_paciente_grupo__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_listar_estagiario_listar_estagiario__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_listar_pacientes_listar_pacientes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_brmasker_ionic_3__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_problema_problema__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_grupo_grupo__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_pre_cadastro_pre_cadastro__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_listar_grupo_listar_grupo__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_listar_professores_listar_professores__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_listar_especialidade_listar_especialidade__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_listar_grupo_estagiarios_listar_grupo_estagiarios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_grupo_estagiario_grupo_estagiario__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_fila_de_espera_fila_de_espera_module__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_arquivos_arquivos__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_cadastro_semestre_cadastro_semestre_module__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_listar_semestre_listar_semestre_module__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_semestre_semestre__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_cadastrar_horario_professor_cadastrar_horario_professor_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_reserva_sala_reserva_sala__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_listar_reserva_salas_listar_reserva_salas__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_professor_professor__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastrar_estagiario_cadastrar_estagiario__["a" /* CadastrarEstagiarioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_especialidade_cadastrar_especialidade__["a" /* CadastrarEspecialidadePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cadastrar_grupo_cadastrar_grupo__["a" /* CadastrarGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_relatar_problema_relatar_problema__["a" /* RelatarProblemaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sortear_paciente_grupo_sortear_paciente_grupo__["a" /* SortearPacienteGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__["a" /* CadastrarGrupoEstagiariosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_listar_pacientes_listar_pacientes__["a" /* ListarPacientesPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_listar_estagiario_listar_estagiario__["a" /* ListarEstagiarioPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_listar_professores_listar_professores__["a" /* ListarProfessoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_listar_grupo_listar_grupo__["a" /* ListarGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_listar_especialidade_listar_especialidade__["a" /* ListarEspecialidadePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_listar_grupo_estagiarios_listar_grupo_estagiarios__["a" /* ListarGrupoEstagiariosPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_listar_reserva_salas_listar_reserva_salas__["a" /* ListarReservasPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastrar-especialidade/cadastrar-especialidade.module#CadastrarEsoecialidadePageModule', name: 'CadastrarEspecialidadePage', segment: 'cadastrar-especialidade', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-estagiario/cadastrar-estagiario.module#CadastrarEstagiarioPageModule', name: 'CadastrarEstagiarioPage', segment: 'cadastrar-estagiario', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios.module#CadastrarGrupoEstagiariosPageModule', name: 'CadastrarGrupoEstagiariosPage', segment: 'cadastrar-grupo-estagiarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-grupo/cadastrar-grupo.module#CadastrarGrupoPageModule', name: 'CadastrarGrupoPage', segment: 'cadastrar-grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-horario-professor/cadastrar-horario-professor.module#CadastrarHorarioProfessorPageModule', name: 'CadastrarHorarioProfessorPage', segment: 'cadastrar-horario-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastrar-professor/cadastrar-professor.module#CadastrarProfessorPageModule', name: 'CadastrarProfessorPage', segment: 'cadastrar-professor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro-semestre/cadastro-semestre.module#CadastroSemestrePageModule', name: 'CadastroSemestrePage', segment: 'cadastro-semestre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fila-de-espera/fila-de-espera.module#FilaDeEsperaPageModule', name: 'FilaDeEsperaPage', segment: 'fila-de-espera', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/finalizar-pre-cadastro/finalizar-pre-cadastro.module#FinalizarPreCadastroPageModule', name: 'FinalizarPreCadastroPage', segment: 'finalizar-pre-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-grupo-estagiarios/listar-grupo-estagiarios.module#ListarGrupoEstagiariosPageModule', name: 'ListarGrupoEstagiariosPage', segment: 'listar-grupo-estagiarios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-grupo/listar-grupo.module#ListarGrupoPageModule', name: 'ListarGrupoPage', segment: 'listar-grupo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-pacientes/listar-pacientes.module#ListarPacientesPageModule', name: 'ListarPacientesPage', segment: 'listar-pacientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-professores/listar-professores.module#ListarProfessoresPageModule', name: 'ListarProfessoresPage', segment: 'listar-professores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-semestre/listar-semestre.module#ListarSemestrePageModule', name: 'ListarSemestrePage', segment: 'listar-semestre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pre-cadastro/pre-cadastro.module#PreCadastroPageModule', name: 'PreCadastroPage', segment: 'pre-cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relatar-problema/relatar-problema.module#RelatarProblemaPageModule', name: 'RelatarProblemaPage', segment: 'relatar-problema', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservar-sala/reservar-sala.module#ReservarSalaPageModule', name: 'ReservarSalaPage', segment: 'reservar-sala', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sortear-paciente-grupo/sortear-paciente-grupo.module#SortearPacienteGrupoPageModule', name: 'SortearPacienteGrupoPage', segment: 'sortear-paciente-grupo', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__pages_pre_cadastro_pre_cadastro_module__["PreCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_reservar_sala_reservar_sala_module__["ReservarSalaPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_finalizar_pre_cadastro_finalizar_pre_cadastro_module__["FinalizarPreCadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_33__pages_fila_de_espera_fila_de_espera_module__["FilaDeEsperaPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_cadastro_semestre_cadastro_semestre_module__["CadastroSemestrePageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_listar_semestre_listar_semestre_module__["ListarSemestrePageModule"],
                //ListarReservasPageModule
                __WEBPACK_IMPORTED_MODULE_38__pages_cadastrar_horario_professor_cadastrar_horario_professor_module__["CadastrarHorarioProfessorPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cadastrar_estagiario_cadastrar_estagiario__["a" /* CadastrarEstagiarioPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_cadastrar_especialidade_cadastrar_especialidade__["a" /* CadastrarEspecialidadePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_cadastrar_grupo_cadastrar_grupo__["a" /* CadastrarGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_relatar_problema_relatar_problema__["a" /* RelatarProblemaPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_sortear_paciente_grupo_sortear_paciente_grupo__["a" /* SortearPacienteGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cadastrar_grupo_estagiarios_cadastrar_grupo_estagiarios__["a" /* CadastrarGrupoEstagiariosPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_finalizar_pre_cadastro_finalizar_pre_cadastro__["a" /* FinalizarPreCadastroPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_listar_estagiario_listar_estagiario__["a" /* ListarEstagiarioPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_listar_pacientes_listar_pacientes__["a" /* ListarPacientesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_listar_professores_listar_professores__["a" /* ListarProfessoresPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_listar_grupo_listar_grupo__["a" /* ListarGrupoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_listar_especialidade_listar_especialidade__["a" /* ListarEspecialidadePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_listar_grupo_estagiarios_listar_grupo_estagiarios__["a" /* ListarGrupoEstagiariosPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_listar_reserva_salas_listar_reserva_salas__["a" /* ListarReservasPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_estagiario_estagiario__["a" /* CadastrarEstagiarioProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_especialidade_especialidade__["a" /* CadastrarEspecialidadeProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_problema_problema__["a" /* RelatarProblemaProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_grupo_grupo__["a" /* GrupoProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_pre_cadastro_pre_cadastro__["a" /* PreCadastroProvider */],
                __WEBPACK_IMPORTED_MODULE_32__providers_grupo_estagiario_grupo_estagiario__["a" /* GrupoEstagiarioProvider */],
                __WEBPACK_IMPORTED_MODULE_34__providers_arquivos_arquivos__["a" /* ArquivosProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_semestre_semestre__["a" /* SemestreProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_reserva_sala_reserva_sala__["a" /* ReservaSalaProvider */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */],
                __WEBPACK_IMPORTED_MODULE_41__providers_professor_professor__["a" /* ProfessorProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pre_cadastro_pre_cadastro__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastrar_professor_cadastrar_professor__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_relatar_problema_relatar_problema__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_listar_estagiario_listar_estagiario__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_listar_grupo_listar_grupo__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_listar_pacientes_listar_pacientes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_listar_professores_listar_professores__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_listar_especialidade_listar_especialidade__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_listar_grupo_estagiarios_listar_grupo_estagiarios__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fila_de_espera_fila_de_espera__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_firebase_config__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_listar_semestre_listar_semestre__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cadastrar_horario_professor_cadastrar_horario_professor__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_listar_reserva_salas_listar_reserva_salas__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // manter comentado, poderá ser usado para testes futuramente. - Gabriel 09/04 23h
        this.pages = [
            // { title: 'Cadastrar Estagiário', component: CadastrarEstagiarioPage},
            { title: 'Semestre', component: __WEBPACK_IMPORTED_MODULE_17__pages_listar_semestre_listar_semestre__["a" /* ListarSemestrePage */] },
            { title: 'Estagiário', component: __WEBPACK_IMPORTED_MODULE_8__pages_listar_estagiario_listar_estagiario__["a" /* ListarEstagiarioPage */] },
            { title: 'Grupo', component: __WEBPACK_IMPORTED_MODULE_9__pages_listar_grupo_listar_grupo__["a" /* ListarGrupoPage */] },
            { title: 'Grupo de estagiários', component: __WEBPACK_IMPORTED_MODULE_13__pages_listar_grupo_estagiarios_listar_grupo_estagiarios__["a" /* ListarGrupoEstagiariosPage */] },
            { title: 'Pré-cadastro', component: __WEBPACK_IMPORTED_MODULE_5__pages_pre_cadastro_pre_cadastro__["a" /* PreCadastroPage */] },
            { title: 'Lista de pacientes', component: __WEBPACK_IMPORTED_MODULE_10__pages_listar_pacientes_listar_pacientes__["a" /* ListarPacientesPage */] },
            { title: 'Fila de Espera', component: __WEBPACK_IMPORTED_MODULE_14__pages_fila_de_espera_fila_de_espera__["a" /* FilaDeEsperaPage */] },
            { title: 'Especialidade', component: __WEBPACK_IMPORTED_MODULE_12__pages_listar_especialidade_listar_especialidade__["a" /* ListarEspecialidadePage */] },
            { title: 'Listar Professores', component: __WEBPACK_IMPORTED_MODULE_11__pages_listar_professores_listar_professores__["a" /* ListarProfessoresPage */] },
            // { title: 'Cadastrar Especialidade', component: CadastrarEspecialidadePage},
            { title: 'Cadastrar Professsor', component: __WEBPACK_IMPORTED_MODULE_6__pages_cadastrar_professor_cadastrar_professor__["a" /* CadastrarProfessorPage */] },
            // { title: 'Reservar Sala', component: ReservarSalaPage},
            { title: 'Lista de Reservas de Sala', component: __WEBPACK_IMPORTED_MODULE_19__pages_listar_reserva_salas_listar_reserva_salas__["a" /* ListarReservasPage */] },
            // { title: 'Cadastrar Grupo', component: CadastrarGrupoPage},
            //{ title: 'Sortear Paciente Grupo', component: SortearPacienteGrupoPage},
            { title: 'Ouvidoria', component: __WEBPACK_IMPORTED_MODULE_7__pages_relatar_problema_relatar_problema__["a" /* RelatarProblemaPage */] },
            //{ title: 'Cadastrar Grupo Estagiários', component: CadastrarGrupoEstagiariosPage},
            //{ title: 'Finalizar Pré Cadastro', component: FinalizarPreCadastroPage},
            //{ title: 'Cadastrar Semestre', component: CadastroSemestrePage},
            { title: 'Cadastrar Horário de Professores', component: __WEBPACK_IMPORTED_MODULE_18__pages_cadastrar_horario_professor_cadastrar_horario_professor__["a" /* CadastrarHorarioProfessorPage */] }
        ];
        __WEBPACK_IMPORTED_MODULE_15_firebase___default.a.initializeApp(__WEBPACK_IMPORTED_MODULE_16__app_firebase_config__["a" /* FIREBASE_CONFIG */]);
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        //this.nav.setRoot(page.component);
        this.nav.push(page.component, {
            rootNavCtrl: this.nav
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var FIREBASE_CONFIG = {
    apiKey: "AIzaSyBOeCbx4yrkP7YDY1uXeuBaIPCRCCT2nrk",
    authDomain: "anexar-arquivos.firebaseapp.com",
    databaseURL: "https://anexar-arquivos.firebaseio.com",
    projectId: "anexar-arquivos",
    storageBucket: "anexar-arquivos.appspot.com",
    messagingSenderId: "407788348484"
};
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreCadastroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreCadastroProvider = (function () {
    function PreCadastroProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
    }
    PreCadastroProvider.prototype.gravar = function (preCadastro) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/preCadastro/gravar', preCadastro).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    PreCadastroProvider.prototype.retornarEspecialidade = function () {
        return this.http.get('http://localhost:3000/preCadastro/listarEspecialidade').toPromise();
    };
    PreCadastroProvider.prototype.retornarPacientes = function () {
        return this.http.get('http://localhost:3000/preCadastro/listarPacientes').toPromise();
    };
    PreCadastroProvider.prototype.excluirPaciente = function (idPaciente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/preCadastro/excluir', idPaciente).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    PreCadastroProvider.prototype.aprovarCadastro = function (dadosPaciente) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('http://localhost:3000/preCadastro/aprovarCadastro', dadosPaciente).subscribe(function (response) {
                resolve(response);
            });
        });
    };
    PreCadastroProvider.prototype.retornarPacientesFila = function () {
        return this.http.get('http://localhost:3000/preCadastro/listarPacientesFila').toPromise();
    };
    PreCadastroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], PreCadastroProvider);
    return PreCadastroProvider;
}());

//# sourceMappingURL=pre-cadastro.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarProfessorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_professor_professor__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastrarProfessorPage = (function () {
    function CadastrarProfessorPage(navCtrl, navParams, provider, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.provider = provider;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.idProfessor = "";
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
    CadastrarProfessorPage.prototype.CadastrarProfessor = function () {
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
    };
    CadastrarProfessorPage.prototype.listarEspecialidade = function () {
        var _this = this;
        this.provider.listar().then(function (data) {
            _this.especialidades = data;
            console.log(data);
        })
            .catch(function (error) { return alert(error); });
    };
    CadastrarProfessorPage.prototype.showAlertCadastrar = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Professor cadastrado com sucesso',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarProfessorPage.prototype.showAlertAlterar = function () {
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            subTitle: 'Professor alterado com sucesso',
            buttons: ['Ok']
        });
        alert.present();
        this.navCtrl.pop();
    };
    CadastrarProfessorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastrarProfessorPage');
    };
    CadastrarProfessorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cadastrar-professor',template:/*ion-inline-start:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-professor\cadastrar-professor.html"*/'<!--\n  Generated template for the CadastrarProfessorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastrar Professor</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <form (ngSubmit)="CadastrarProfessor()" #f="ngForm">\n      <ion-row>\n         <ion-col>\n           <ion-item>\n             <ion-label color="primary" floating>Nome Completo</ion-label>\n             <ion-input type="text" name="nomeProfessor" [(ngModel)]="nomeProfessor"></ion-input>\n           </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" floating>Matricula</ion-label>\n              <ion-input type="text" name="matriculaProfessor" [(ngModel)]="matriculaProfessor"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" floating>CREFITO</ion-label>\n              <ion-input type="text" name="crefitoProfessor" [(ngModel)]="crefitoProfessor"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" floating>Email</ion-label>\n              <ion-input type="email" name="emailProfessor" [(ngModel)]="emailProfessor"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label color="primary" name="telefoneProfessor" floating>Telefone</ion-label>\n              <ion-input type="text" name="telefoneProfessor" [brmasker]="{mask:\'(00)00000-0000\', len:14}" [(ngModel)]="telefoneProfessor"></ion-input> >\n            </ion-item>\n            <ion-item>\n              <ion-label color="primary" floating>Área de Especialidade</ion-label>\n              <ion-select name="especialidadeProfessor" [(ngModel)]="especialidadeProfessor">\n                <ion-option *ngFor="let especialidade of especialidades" value="{{ especialidade.codigoespecialidade }}">{{ especialidade.descricaoespecialidade }}</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      <button ion-button color="danger" menuToggle="left">Cancelar</button>\n      <button ion-button color="secondary">Confirmar</button>\n    </form>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"C:\Estagio\Front-end_ClinicaFisio-master\src\pages\cadastrar-professor\cadastrar-professor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_professor_professor__["a" /* ProfessorProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CadastrarProfessorPage);
    return CadastrarProfessorPage;
}());

//# sourceMappingURL=cadastrar-professor.js.map

/***/ })

},[325]);
//# sourceMappingURL=main.js.map