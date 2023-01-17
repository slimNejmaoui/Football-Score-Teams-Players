(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"site-wrap\">\n  <app-header></app-header>\n\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-data/add-data.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-data/add-data.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">Add Data</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-\">\n                <form>\n\n\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" (click)=\" addData()\" value=\"ADD Data\" />\n                    </div>\n                    <span class=\"text text-danger\">{{messageData}}</span>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/add-stadium/add-stadium.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/add-stadium/add-stadium.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner [title]=\"title\">\n</app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-\">\n                <form action=\"#\" #stadiumForm=\"ngForm\" (ngSubmit)=\"AddStadium()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"stadium.name\" name=\"name\"\n                            placeholder=\"Name\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"stadium.capacite\" name=\"capacite\"\n                            placeholder=\"capacite\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"stadium.country\" name=\"country\"\n                            placeholder=\"country\" />\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [value]=\"title\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/addmatchs/addmatchs.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/addmatchs/addmatchs.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-9 mx-auto text-center\">\n        <h1 class=\"text-white\">Add Match</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-\">\n        <form action=\"#\" #matchForm=\"ngForm\" (ngSubmit)=\"addmatch()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.scoreone\" name=\"scoreone\"\n              placeholder=\"score one\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.scoretwo\" name=\"scoretwo\"\n              placeholder=\"score two\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.teamone\" name=\"teamone\" placeholder=\"team one\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.teamtwo\" name=\"teamtwo\" placeholder=\"team two\" />\n          </div>\n          <div class=\"form-group\">\n\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <button class=\"btn btn-outline-secondary\" type=\"button\">stadium</button>\n              </div>\n              <select class=\"custom-select\" id=\"inputGroupSelect03\" (change)=\"onSelect($event)\"\n                aria-label=\"Example select with button addon\">\n                <     >\n                <option value=\"1\"></option>\n\n              </select>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Add match\" />\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/addplayers/addplayers.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/addplayers/addplayers.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-9 mx-auto text-center\">\n        <h1 class=\"text-white\">Add player</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-\">\n        <form [formGroup]=\"playerForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" formControlName=\"name\" class=\"form-control\" placeholder=\"name\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"number\" class=\"form-control\" formControlName=\"numero\" name=\"numero\"\n              placeholder=\"numero de maillot\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"position\" name=\"position\" placeholder=\"position\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"team\" name=\"team\" placeholder=\"team\" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"number\" class=\"form-control\" formControlName=\"age\" name=\"age\" placeholder=\"age\" />\n          </div>\n          <div>\n            <button class=\"btn btn-danger\" (click)=\"filepicker.click()\"> select your avatar</button>\n          </div>\n\n\n          <div style=\"visibility: hidden ;\">\n            <input type=\"file\" class=\"form-control\" #filepicker (change)='onImageSelected($event)'\n              placeholder=\"fichier\" />\n          </div>\n\n          <div style=\"margin-bottom: 120px ;\">\n            <img [src]=\"imagePreview\" style=\"width:200px ; height:200px\" *ngIf=\"imagePreview\" alt=\"Avatar\">\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" (click)=\"addPlayer()\" value=\"Add Player\" />\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/addteams/addteams.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/addteams/addteams.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-9 mx-auto text-center\">\n        <h1 class=\"text-white\">ADD teams</h1>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <form action=\"#\" #teamForm=\"ngForm\" (ngSubmit)=\"addteam()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Name\" name=\"Name\" placeholder=\"Name \" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Stadium\" name=\"Stadium\" placeholder=\"Stadium \" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Country\" name=\"Country\" placeholder=\"Country \" />\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Owner\" name=\"Owner\" placeholder=\"Owner\" />\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Add Team\" />\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/article/article.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/article/article.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-media d-flex\">\n    <div class=\"img mr-4\">\n        <img src=\"assets/images/img_1.jpg\" alt=\"Image\" class=\"img-fluid\" />\n    </div>\n    <div class=\"text\">\n        <span class=\"meta text-danger\">{{a.date}}</span>\n        <h3 class=\"mb-4\"><a href=\"#\">{{a.description}}</a></h3>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus\n            deserunt saepe tempora dolorem.\n        </p>\n        <p><a href=\"#\">{{a.offre}}</a></p>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/banner/banner.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/banner/banner.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">{{title}}</h1>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/blog/blog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container site-section\">\n  <div class=\"row\">\n    <div class=\"col-6 title-section\">\n      <h2 class=\"heading\">Our Blog</h2>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-6 p-3\" *ngFor=\"let item of Tblogs\">\n        <app-article [a]=\"item\"></app-article>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cup-event/cup-event.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cup-event/cup-event.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"hero overlay\"\n  style=\"background-image: url('assets/images/bg_3.jpg')\"\n>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-5 ml-auto\">\n        <h1 class=\"text-white\">World Cup Event</h1>\n        <p>\n          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,\n          molestias repudiandae pariatur.\n        </p>\n        <div id=\"date-countdown\"></div>\n        <p>\n          <a href=\"#\" class=\"btn btn-primary py-3 px-4 mr-3\">Book Ticket</a>\n          <a href=\"#\" class=\"more light\">Learn More</a>\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-9 mx-auto text-center\">\n        <h1 class=\"text-white\">{{ 'Dashboard' | asterix }}</h1>\n        <h3>{{actualDate | date :\"medium\"}}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"product_description_area m-5\">\n  <div class=\"container\">\n    <div class=\"col-lg-12 mx-auto text-center\">\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n            aria-selected=\"true\">Matchs</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n            aria-selected=\"false\">Players</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\"\n            aria-selected=\"false\">Teams</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"users-tab\" data-toggle=\"tab\" href=\"#users\" role=\"tab\" aria-controls=\"users\"\n            aria-selected=\"false\">Users</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"stadium-tab\" data-toggle=\"tab\" href=\"#stadium\" role=\"tab\" aria-controls=\"stadium\"\n            aria-selected=\"false\">stadium</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"tab-content\" id=\"myTabContent\">\n      <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n        Matchs\n        <app-matchestable></app-matchestable>\n      </div>\n      <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n        Players\n        <app-playertable></app-playertable>\n      </div>\n      <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n        Teams\n        <app-teamtable></app-teamtable>\n      </div>\n      <div class=\"tab-pane fade\" id=\"users\" role=\"tabpanel\" aria-labelledby=\"users-tab\">\n        Users\n        <app-useres-table></app-useres-table>\n      </div>\n      <div class=\"tab-pane fade\" id=\"stadium\" role=\"tabpanel\" aria-labelledby=\"stadium-tab\">\n        stadium\n        <app-stadium-table></app-stadium-table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-match/display-match.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-match/display-match.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">Match Information</h1>\n            </div>\n        </div>\n    </div>\n</div>\n<div>\n\n    <app-scores [matchestable]=\"match\"></app-scores>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-players/display-players.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-players/display-players.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">PLayers Informations</h1>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\" style=\"margin-left:300px ; margin-top: 120px;\">\n    <div class=\"item\">\n        <div class=\"video-media\">\n            <img [src]=\"player.avatar\" alt=\"Image\" class=\"img-fluid\" style=\"width: 400px; height: 600px;\">\n            <a href=\"https://vimeo.com/139714818\" class=\"d-flex play-button align-items-center\" data-fancybox>\n                <span class=\"icon mr-3\">\n                    <span class=\"icon-play\"></span>\n                </span>\n                <div class=\"caption\">\n                    <span class=\"meta\">{{player.name}}</span>\n                    <h3 class=\"m-0\">{{player.position}}</h3>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/display-teams/display-teams.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/display-teams/display-teams.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">Teams Informations</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container text-center\" style=\"margin:20px ; margin-left:  400px;;\">\n    <div class=\"col-lg-6  \">\n        <div class=\"widget-next-match\">\n            <div class=\"widget-title\">\n                <h3>Next Match</h3>\n            </div>\n            <div class=\"widget-body mb-3\">\n                <div class=\"widget-vs\">\n                    <div class=\"d-flex align-items-center justify-content-around justify-content-between w-100\">\n                        <div class=\"team-1 text-center\">\n                            <img src=\"assets/images/logo_1.png\" alt=\"Image\" />\n                            <h3>Football League</h3>\n                        </div>\n                        <div>\n                            <span class=\"vs\"><span>VS</span></span>\n                        </div>\n                        <div class=\"team-2 text-center\">\n                            <img src=\"assets/images/logo_2.png\" alt=\"Image\" />\n                            <h3>Soccer</h3>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"text-center widget-vs-contents mb-4\">\n                <h4>{{team.Name}} </h4>\n                <p class=\"mb-5\">\n                    <span class=\"d-block\">December 20th, 2020</span>\n                    <span class=\"d-block\">9:30 AM GMT+0</span>\n                    <strong class=\"text-primary\">{{team.Stadium}}</strong>\n                </p>\n\n                <div id=\"date-countdown2\" class=\"pb-1\"></div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-match/edit-match.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-match/edit-match.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">Add Match</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-\">\n                <form action=\"#\" #matchForm=\"ngForm\" (ngSubmit)=\"editMatch()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.scoreone\" name=\"scoreone\"\n                            placeholder=\"score one\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.scoretwo\" name=\"scoretwo\"\n                            placeholder=\"score two\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.teamone\" name=\"teamone\"\n                            placeholder=\"team one\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"match.teamtwo\" name=\"teamtwo\"\n                            placeholder=\"team two\" />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Edit match\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-players/edit-players.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-players/edit-players.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\r\n    <div class=\"container\">\r\n        <div class=\"row align-items-center\">\r\n            <div class=\"col-lg-9 mx-auto text-center\">\r\n                <h1 class=\"text-white\">Add player</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"site-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-\">\r\n                <form action=\"#\" #playerForm=\"ngForm\" (ngSubmit)=\"editplayer()\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" [(ngModel)]=\"player.name\" name=\"name\" class=\"form-control\"\r\n                            placeholder=\"name\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"player.numero\" name=\"numero\"\r\n                            placeholder=\"numero de maillot\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.position\" name=\"position\"\r\n                            placeholder=\"position\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"player.team\" name=\"team\"\r\n                            placeholder=\"team\" />\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"player.age\" name=\"age\"\r\n                            placeholder=\"age\" />\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Add Player\" />\r\n                    </div>\r\n                </form>:\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-profile/edit-profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"col-lg-9 mx-auto text-center\">\n        <h1 class=\"text-white\">Signup</h1>\n      </div>\n    </div>\n  </div>\n</div> -->\n<app-banner title=\"signup\">\n</app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form [formGroup]=\"signupForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [(ngModel)]=\"user.firstName\"\n                            placeholder=\"FirstName\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['firstName'].invalid && (signupForm.controls['firstName'].touched || signupForm.controls['firstName'].dirty )\">\n                        <div *ngIf=\"signupForm.controls['firstName'].errors.required\">\n                            FirstName is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['firstName'].errors.minlength\">\n                            FirstName is must have at leats 3 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"LastName\" [(ngModel)]=\"user.lastName\"\n                            placeholder=\"LastName\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['LastName'].invalid && (signupForm.controls['LastName'].touched || signupForm.controls['LastName'].dirty) \">\n                        <div *ngIf=\"signupForm.controls['LastName'].errors.required\">\n                            LastName is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['LastName'].errors.minlength\">\n                            LastName is must have at leats 5 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"user.email\"\n                            placeholder=\"email\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['email'].invalid && (signupForm.controls['email'].touched || signupForm.controls['email'].dirty) \">\n                        <div *ngIf=\"signupForm.controls['email'].errors.required\">\n                            email is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['email'].errors.email\">\n                            email is not valid\n                        </div>\n\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pwd\" [(ngModel)]=\"user.pwd\"\n                            placeholder=\"pwd\" />\n                    </div>\n\n                    <div\n                        *ngIf=\"signupForm.controls['pwd'].invalid && (signupForm.controls['pwd'].touched || signupForm.controls['pwd'].dirty )  \">\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.required\">\n                            password is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.minlength\">\n                            password is must have at leats 3 chars\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.maxlength\">\n                            paasword is must have at leats 12 chars\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.pattern\">\n                            paasword is not valid\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ConfirmePwd\"\n                            placeholder=\"ConfirmePwd\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [disabled]=\"signupForm.invalid\"\n                            (click)=\"editUser()\" value=\"EDit\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-teams/edit-teams.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-teams/edit-teams.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">ADD teams</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form action=\"#\" #teamForm=\"ngForm\" (ngSubmit)=\"editteam()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Name\" name=\"Name\"\n                            placeholder=\"Name \" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Stadium\" name=\"Stadium\"\n                            placeholder=\"Stadium \" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Country\" name=\"Country\"\n                            placeholder=\"Country \" />\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"team.Owner\" name=\"Owner\"\n                            placeholder=\"Owner\" />\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Edit Team\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/edit-users/edit-users.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/edit-users/edit-users.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"signup\">\n</app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form [formGroup]=\"signupForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" [(ngModel)]=\"user.firstName\"\n                            placeholder=\"FirstName\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['firstName'].invalid && (signupForm.controls['firstName'].touched || signupForm.controls['firstName'].dirty )\">\n                        <div *ngIf=\"signupForm.controls['firstName'].errors.required\">\n                            FirstName is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['firstName'].errors.minlength\">\n                            FirstName is must have at leats 3 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" [(ngModel)]=\"user.lastName\"\n                            placeholder=\"LastName\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['lastName'].invalid && (signupForm.controls['lastName'].touched || signupForm.controls['lastName'].dirty) \">\n                        <div *ngIf=\"signupForm.controls['lastName'].errors.required\">\n                            LastName is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['lastName'].errors.minlength\">\n                            LastName is must have at leats 5 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" [(ngModel)]=\"user.email\"\n                            placeholder=\"email\" />\n                    </div>\n                    <div\n                        *ngIf=\"signupForm.controls['email'].invalid && (signupForm.controls['email'].touched || signupForm.controls['email'].dirty) \">\n                        <div *ngIf=\"signupForm.controls['email'].errors.required\">\n                            email is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['email'].errors.email\">\n                            email is not valid\n                        </div>\n\n                    </div>\n                    <span class=\"text text-danger\">{{errorMsg}}</span>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"pwd\" [(ngModel)]=\"user.pwd\"\n                            placeholder=\"pwd\" />\n                    </div>\n\n                    <div\n                        *ngIf=\"signupForm.controls['pwd'].invalid && (signupForm.controls['pwd'].touched || signupForm.controls['pwd'].dirty )  \">\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.required\">\n                            password is required\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.minlength\">\n                            password is must have at leats 3 chars\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.maxlength\">\n                            paasword is must have at leats 12 chars\n                        </div>\n                        <div *ngIf=\"signupForm.controls['pwd'].errors.pattern\">\n                            paasword is not valid\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"ConfirmePwd\"\n                            ([ngModel])=\"user.ConfirmePwd\" placeholder=\"ConfirmePwd\" />\n                    </div>\n                    <div>\n                        <button class=\"btn btn-danger\" (click)=\"filepicker.click()\"> select your avatar</button>\n                    </div>\n\n\n                    <div class=\"form-group\" style=\"visibility: hidden ;\">\n                        <input type=\"file\" class=\"form-control\" #filepicker (change)='onImageSelected($event)'\n                            placeholder=\"fichier\" />\n                    </div>\n\n                    <div style=\"margin-bottom: 120px ;\">\n                        <img [src]=\"imagePreview\" style=\"width:200px ; height:200px\" *ngIf=\"imagePreview\" alt=\"Avatar\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [disabled]=\"signupForm.invalid\"\n                            (click)=\"editUser()\" value=\"Edit Profile\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"widget mb-3\">\n          <h3>News</h3>\n          <ul class=\"list-unstyled links\">\n            <li><a href=\"#\">All</a></li>\n            <li><a href=\"#\">Club News</a></li>\n            <li><a href=\"#\">Media Center</a></li>\n            <li><a href=\"#\">Video</a></li>\n            <li><a href=\"#\">RSS</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"widget mb-3\">\n          <h3>Tickets</h3>\n          <ul class=\"list-unstyled links\">\n            <li><a href=\"#\">Online Ticket</a></li>\n            <li><a href=\"#\">Payment and Prices</a></li>\n            <li><a href=\"#\">Contact &amp; Booking</a></li>\n            <li><a href=\"#\">Tickets</a></li>\n            <li><a href=\"#\">Coupon</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"widget mb-3\">\n          <h3>Matches</h3>\n          <ul class=\"list-unstyled links\">\n            <li><a href=\"#\">Standings</a></li>\n            <li><a href=\"#\">World Cup</a></li>\n            <li><a href=\"#\">La Lega</a></li>\n            <li><a href=\"#\">Hyper Cup</a></li>\n            <li><a href=\"#\">World League</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3\">\n        <div class=\"widget mb-3\">\n          <h3>Social</h3>\n          <ul class=\"list-unstyled links\">\n            <li><a href=\"#\">Twitter</a></li>\n            <li><a href=\"#\">Facebook</a></li>\n            <li><a href=\"#\">Instagram</a></li>\n            <li><a href=\"#\">Youtube</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row text-center\">\n      <div class=\"col-md-12\">\n        <div class=\"pt-5\">\n          <p>\n            <script>\n              document.write(new Date().getFullYear());\n            </script>\n\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-mobile-menu site-navbar-target\">\n  <div class=\"site-mobile-menu-header\">\n    <div class=\"site-mobile-menu-close\">\n      <span class=\"icon-close2 js-menu-toggle\"></span>\n    </div>\n  </div>\n  <div class=\"site-mobile-menu-body\"></div>\n</div>\n\n<header class=\"site-navbar py-4\" role=\"banner\">\n  <div class=\"container\">\n    <div class=\"d-flex align-items-center\">\n      <div class=\"site-logo\">\n        <a routerLink=\"\">\n          <img src=\"assets/images/logo.png\" alt=\"Logo\" />\n        </a>\n      </div>\n      <div class=\"ml-auto\">\n        <nav class=\"site-navigation position-relative text-right\" role=\"navigation\">\n          <ul class=\"site-menu main-menu js-clone-nav mr-auto d-none d-lg-block\">\n            <li class=\"active\">\n              <a routerLink=\"\" class=\"nav-link\">Home</a>\n            </li>\n            <li><a routerLink=\"matches\" class=\"nav-link\">Matches</a></li>\n            <li><a routerLink=\"mymatches\" class=\"nav-link\">My Matches</a></li>\n            <li><a routerLink=\"players\" class=\"nav-link\">Players</a></li>\n            <li><a routerLink=\"AddData\" class=\"nav-link\">Data</a></li>\n\n            <li *ngIf=\"adminIsAuthenticated\">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Admin\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                  <a class=\"dropdown-item\" routerLink=\"dashboard\">dashboard</a>\n                  <a class=\"dropdown-item\" routerLink=\"addmatch\">Add match</a>\n                  <a class=\"dropdown-item\" routerLink=\"addteam\">Add Team</a>\n                  <a class=\"dropdown-item\" routerLink=\"addpalyer\">Add palyer</a>\n                  <a class=\"dropdown-item\" routerLink=\"addStadium\">add Stadium</a>\n                </div>\n              </div>\n            </li>\n            <li *ngIf=\"!userIsAuthenticated \">\n              <div class=\"dropdown\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Sign In\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\n                  <a class=\"dropdown-item\" routerLink=\"login\">Login</a>\n                  <a class=\"dropdown-item\" routerLink=\"registre\">signup</a>\n                  <a class=\"dropdown-item\" routerLink=\"registreAdmin\">signup Admin</a>\n\n                </div>\n              </div>\n            </li>\n            <li *ngIf=\"userIsAuthenticated \">\n              <div class=\"dropdown pl-3\">\n                <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\"\n                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Api\n                </button>\n                <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n\n                  <a class=\"dropdown-item\" routerLink=\"apiTeams\">Teams\n                    Api</a>\n                  <a class=\"dropdown-item\" routerLink=\"weather\">Weather\n                    Api</a>\n                </div>\n              </div>\n            </li>\n            <li><a *ngIf=\"userIsAuthenticated \" routerLink=\"login\" class=\"nav-link\" (click)=\"onLogout()\">Logout</a></li>\n          </ul>\n        </nav>\n\n        <a href=\"#\"\n          class=\"d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right text-white\"><span\n            class=\"icon-menu h3 text-white\"></span></a>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cup-event></app-cup-event>\n<div *ngFor=\"let element of matches\" style=\"margin-top: 150px;\">\n    <app-scores [matchestable]=\"element\"></app-scores>\n</div>\n<app-ranking></app-ranking>\n<app-news></app-news>\n<app-mathchs></app-mathchs>\n<app-blog></app-blog>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/item-match/item-match.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/item-match/item-match.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:120px ;\">\n\n\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n\n            <div class=\"d-flex team-vs\">\n                <span class=\"score\">{{searchMatch.scoreone}}-{{searchMatch.scoretwo}}</span>\n                <div class=\"team-1 w-50\">\n                    <div class=\"team-details w-100 text-center\">\n                        <img src=\"assets/images/logo_1.png\" alt=\"Image\" class=\"img-fluid\">\n                        <h3>{{searchMatch.teamone}}<span>(win)</span></h3>\n                        <ul class=\"list-unstyled\">\n                            <li>Anja Landry (7)</li>\n                            <li>Eadie Salinas (12)</li>\n                            <li>Ashton Allen (10)</li>\n                            <li>Baxter Metcalfe (5)</li>\n                        </ul>\n                    </div>\n                </div>\n                <div class=\"team-2 w-50\">\n                    <div class=\"team-details w-100 text-center\">\n                        <img src=\"assets/images/logo_2.png\" alt=\"Image\" class=\"img-fluid\">\n                        <h3>{{searchMatch.teamtwo}} <span>(loss)</span></h3>\n                        <ul class=\"list-unstyled\">\n                            <li>Macauly Green (3)</li>\n                            <li>Arham Stark (8)</li>\n                            <li>Stephan Murillo (9)</li>\n                            <li>Ned Ritter (5)</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loader/loader.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loader\"></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"login\">\n</app-banner>\n\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <form #loginForm=\"ngForm\" (ngSubmit)=\"connection()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Email\"\n              #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': loginForm.submitted && email.invalid }\" required email />\n\n            <div *ngIf=\"loginForm.submitted && email.invalid\"\n              class=\"form-control border border-secondary rounded-right\">\n              <p *ngIf=\"email.errors.required\">email is required</p>\n              <p *ngIf=\"email.errors.email\">email is invalid</p>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" name=\"pwd\" [(ngModel)]=\"user.pwd\" placeholder=\"pwd\" #pwd=\"ngModel\"\n              [ngClass]=\"{ 'is-invalid': loginForm.submitted && pwd.invalid }\" required />\n\n            <div *ngIf=\"loginForm.submitted && pwd.invalid\" class=\"form-control border border-secondary rounded-right\">\n              <p *ngIf=\"pwd.errors.required\">password is required</p>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Login\" />\n\n\n          </div>\n          <h5 class=\"aler text text-danger\">{{errorMsg}}</h5>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/logintest/logintest.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/logintest/logintest.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"login\"></app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"user.email\"\n                            name=\"email\" #email=\"ngModel\"\n                            [ngClass]=\"{ 'is-invalid': loginForm.submitted && email.invalid }\" required email>\n                        <div *ngIf=\"loginForm.submitted && email.invalid\" class=\"invalid-feedback\">\n                            <p *ngIf=\"email.errors.required\">email is required</p>\n                            <p *ngIf=\"email.errors.email\">email is invalid</p>\n                        </div>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Password\" name=\"pwd\" [(ngModel)]=\"user.pwd\"\n                            #pwd=\"ngModel\" [ngClass]=\"{ 'is-invalid': loginForm.submitted && pwd.invalid }\" required>\n                        <div *ngIf=\"loginForm.submitted && pwd.invalid\" class=\"invalid-feedback\">\n                            <p *ngIf=\"pwd.errors.required\">password is required</p>\n                        </div>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" value=\"Login\">\n                    </div>\n                </form>\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/match/match.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/match/match.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-light p-4 rounded\">\n  <div class=\"widget-body\">\n    <div class=\"widget-vs\">\n      <div\n        class=\"d-flex align-items-center justify-content-around justify-content-between w-100\"\n      >\n        <div class=\"team-1 text-center\">\n          <img src=\"assets/images/logo_3.png\" alt=\"Image\" />\n          <h3>{{x.teamone}}</h3>\n        </div>\n        <div>\n          <span class=\"vs\"><span>VS</span></span>\n        </div>\n        <div class=\"team-2 text-center\">\n          <img src=\"assets/images/logo_4.png\" alt=\"Image\" />\n          <h3>{{x.teamtwo}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"text-center widget-vs-contents mb-4\">\n    <h4>World Cup League</h4>\n    <p class=\"mb-5\">\n      <span class=\"d-block\">December 20th, 2020</span>\n      <span class=\"d-block\">9:30 AM GMT+0</span>\n      <strong class=\"text-primary\">New Euro Arena</strong>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/matchestable/matchestable.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/matchestable/matchestable.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n\n  <div class=\"form-group\">\n    <input type=\"text-center\" class=\"form-control\" [(ngModel)]=\"term\" name=\"value\" style=\"margin: 20px; width: 90% ; ;\"\n      placeholder=\"Search\" />\n  </div>\n\n\n</form>\n\n\n\n\n<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Id</th>\n      <th scope=\"col\">team one</th>\n      <th scope=\"col\">team two</th>\n      <th scope=\"col\">score one</th>\n      <th scope=\"col\">score two</th>\n      <th scope=\"col\">stadiumId</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody id=\"adminid\">\n    <tr *ngFor=\" let item of pageOfItems | myFiltre :term\">\n      <td>{{item._id}}</td>\n      <td [ngStyle]=\"{'color':colorMatch(item.scoreone,item.scoretwo)}\">{{item.teamone}}</td>\n      <td [ngStyle]=\"{'color':colorMatch(item.scoretwo,item.scoreone)}\">{{item.teamtwo}}</td>\n      <td [ngStyle]=\"{'color':colorMatch(item.scoreone,item.scoretwo)}\">{{item.scoreone}}</td>\n      <td [ngStyle]=\"{'color':colorMatch(item.scoretwo,item.scoreone)}\">{{item.scoretwo}}</td>\n      <td>{{item.stadiumId}}</td>\n      <td>\n\n        <button class=\"btn btn-success \" (click)=\"gotoDisplay(item._id)\">display</button>\n        <button class=\"btn btn-warning\" (click)=\"gotoEdit(item._id)\">Edit</button>\n        <button class=\"btn btn-danger \" (click)=\"deleteMatch(item._id)\">Delete</button>\n      </td>\n    </tr>\n\n  </tbody>\n\n\n</table>\n<div class=\"card-footer pb-0 pt-3\">\n  <jw-pagination [items]=\"T\" (changePage)=\"onChangePage($event)\" [pageSize]=\"5\"></jw-pagination>\n</div>\n<!-- <div class=\"d-flex justify-content-center\" *ngIf='!matches'>\n  <app-loader></app-loader>\n</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mathchs/mathchs.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mathchs/mathchs.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 title-section\">\n        <h2 class=\"heading\">Upcoming Match</h2>\n      </div>\n\n      <div *ngFor=\"let m of pageOfItems\" class=\"col-lg-6 mb-4\">\n        <app-match [x]=\"m\"></app-match>\n      </div>\n\n      <div class=\"card-footer pb-0 pt-3\" style=\"margin-left: 300px;\">\n        <jw-pagination [items]=\"matches\" (changePage)=\"onChangePage($event)\" [pageSize]=\"6\"></jw-pagination>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/mymatches/mymatches.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/mymatches/mymatches.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">My matchse</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n\n\n\n    <div *ngFor=\"let match of pageOfItems\" style=\"margin-top: 150px;\">\n        <app-scores [matchestable]=\"match\"></app-scores>\n    </div>\n\n\n\n    <div class=\"card-footer pb-0 pt-3\" style=\"margin-left: 300px;\">\n        <jw-pagination [items]=\"matches\" (changePage)=\"onChangePage($event)\" [pageSize]=\"3\"></jw-pagination>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/news/news.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/news/news.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-news\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 title-section\">\n        <h2 class=\"heading\">Latest News</h2>\n      </div>\n    </div>\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4 p-2\" *ngFor=\"let s of T\">\n        <app-player-info [f]=\"s\"></app-player-info>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/not-found/not-found.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section bg-dark \" style=\"padding-top: 120px;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-12 title-section\">\n                <h2 class=\"heading\">Page Not Found</h2>\n            </div>\n\n\n            <!-- Sing in  Form -->\n            <section class=\"sign-in\">\n                <div class=\"container\">\n                    <div class=\"signin-content pb-5\">\n                        <div class=\"signin-image\">\n                            <figure><img src=\"assets/images/404.jpg\" alt=\"sing up image\"></figure>\n                        </div>\n                        <div class=\"signin-form\">\n                            <h2 class=\"form-title\">Error 404</h2>\n                            <p>The page you are looking for does't exist or an other error occurred.</p><br>\n                            <form class=\"register-form\" id=\"login-form\">\n                                <div class=\"form-group form-button\">\n                                    <button class=\"btn btn-round btn-primary\" name=\"home\" routerLink=\"\" id=\"home\">Go to\n                                        home\n                                        page</button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/player-info/player-info.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/player-info/player-info.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-entry\">\n  <a href=\"#\">\n    <img [src]=\"f.avatar\" alt=\"Image\" class=\"img-fluid\" style=\"width:400px ; height: 400px;\" />\n  </a>\n  <div class=\"caption\">\n    <div class=\"caption-inner\">\n      <h3 class=\"mb-3\">{{f.title}}</h3>\n      <div class=\"author d-flex align-items-center\">\n        <div class=\"img mb-2 mr-3\">\n          <img [src]=\"f.avatar\" style=\"width:20px ; height: 20px;\">\n        </div>\n        <div class=\"text\">\n          <h4>{{f.name}}</h4>\n          <span>{{f.date}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/players/players.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/players/players.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"latest-news\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12 title-section\">\n        <h2 class=\"heading\">All Players</h2>\n      </div>\n      <div class=\"row no-gutters\">\n        <div *ngFor=\"let item of T\" class=\"col-md-4 p-2\">\n          <app-player-info [f]=\"item\"></app-player-info>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/playertable/playertable.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/playertable/playertable.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">numero de mailot</th>\n      <th scope=\"col\">position</th>\n      <th scope=\"col\">team</th>\n      <th scope=\"col\">age</th>\n      <th scope=\"col\">image</th>\n      <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let player of  T\">\n      <td>{{player.name}}</td>\n      <td>{{player.numero}}</td>\n      <td>{{player.position}}</td>\n      <td>{{player.team}}</td>\n      <td>{{player.age}}</td>\n      <td><img [src]=\"player.avatar\" style=\"width:100px ; height: 100px;\"></td>\n\n      <td>\n        <button class=\"btn btn-success \" (click)=\"gotoDisplay(player._id)\">display</button>\n        <button class=\"btn btn-warning\" (click)=\"gotoEdit(player._id)\">Edit</button>\n        <button class=\"btn btn-danger \" (click)=\"Delete(player._id)\">Delete</button>\n\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section first-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12 blog-content\">\n\n                <div class=\"pt-5\">\n                    <h3 class=\"mb-5 text-white\">Mon Profile</h3>\n                    <div class=\"comment-list\">\n                        <li class=\"comment\">\n\n                            <div class=\"vcard bio\">\n                                <img class=\"rounded float-left\" style=\"width: 200px;  height: 200px; \"\n                                    [src]=\"user.avatar\" alt=\"Image placeholder\">\n                            </div>\n                            <div class=\"comment-body\" style=\"margin-left:  280px;\">\n                                <h3>{{user.firstName}}</h3>\n                                <div class=\"meta\">{{user.email}}</div>\n                                <p>{{user.lastName}}</p>\n                                <p><a class=\"reply\" (click)=\"editUser(user._id)\">edit</a></p>\n                            </div>\n                        </li>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/ranking/ranking.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/ranking/ranking.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"site-section bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"widget-next-match\">\n          <div class=\"widget-title\">\n            <h3>Next Match</h3>\n          </div>\n          <div class=\"widget-body mb-3\">\n            <div class=\"widget-vs\">\n              <div\n                class=\"d-flex align-items-center justify-content-around justify-content-between w-100\"\n              >\n                <div class=\"team-1 text-center\">\n                  <img src=\"assets/images/logo_1.png\" alt=\"Image\" />\n                  <h3>Football League</h3>\n                </div>\n                <div>\n                  <span class=\"vs\"><span>VS</span></span>\n                </div>\n                <div class=\"team-2 text-center\">\n                  <img src=\"assets/images/logo_2.png\" alt=\"Image\" />\n                  <h3>Soccer</h3>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"text-center widget-vs-contents mb-4\">\n            <h4>World Cup League</h4>\n            <p class=\"mb-5\">\n              <span class=\"d-block\">December 20th, 2020</span>\n              <span class=\"d-block\">9:30 AM GMT+0</span>\n              <strong class=\"text-primary\">New Euro Arena</strong>\n            </p>\n\n            <div id=\"date-countdown2\" class=\"pb-1\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"widget-next-match\">\n          <table class=\"table custom-table\">\n            <thead>\n              <tr>\n                <th>P</th>\n                <th>Team</th>\n                <th>W</th>\n                <th>D</th>\n                <th>L</th>\n                <th>PTS</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td><strong class=\"text-white\">Football League</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td><strong class=\"text-white\">Soccer</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td><strong class=\"text-white\">Juvendo</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>\n                  <strong class=\"text-white\">French Football League</strong>\n                </td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>5</td>\n                <td><strong class=\"text-white\">Legia Abante</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>6</td>\n                <td><strong class=\"text-white\">Gliwice League</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>7</td>\n                <td><strong class=\"text-white\">Cornika</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n              <tr>\n                <td>8</td>\n                <td><strong class=\"text-white\">Gravity Smash</strong></td>\n                <td>22</td>\n                <td>3</td>\n                <td>2</td>\n                <td>140</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/scores/scores.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/scores/scores.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"d-flex team-vs\">\n        <span class=\"score\">\n          <span\n            [ngStyle]=\"{'color':color(matchestable.scoreone,matchestable.scoretwo)}\">{{matchestable.scoreone}}</span> -\n          <span [ngStyle]=\"{'color':color(matchestable.scoretwo,matchestable.scoreone)}\">\n            {{matchestable.scoretwo}}</span>\n        </span>\n        <div class=\"team-1 w-50\">\n          <div class=\"team-details w-100 text-center\">\n            <img src=\"assets/images/logo_1.png\" alt=\"Image\" class=\"img-fluid\" />\n            <h3>\n              <span [ngClass]=\"{ \n                'win':matchestable.scoreone > matchestable.scoretwo,\n                'loss':matchestable.scoreone < matchestable.scoretwo,\n                'draw' :matchestable.scoreone ==  matchestable.scoretwo\n            }\">\n\n                {{matchestable.teamone}}\n\n              </span>\n\n              <span>({{score(matchestable.scoreone,matchestable.scoretwo)}})</span>\n            </h3>\n            <ul class=\"list-unstyled\">\n              <li>Anja Landry (7)</li>\n              <li>Eadie Salinas (12)</li>\n              <li>Ashton Allen (10)</li>\n              <li>Baxter Metcalfe (5)</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"team-2 w-50\">\n          <div class=\"team-details w-100 text-center\">\n            <img src=\"assets/images/logo_2.png\" alt=\"Image\" class=\"img-fluid\" />\n            <h3>\n\n              <span [ngClass]=\"{ \n                'win':matchestable.scoretwo > matchestable.scoreone,\n                'loss':matchestable.scoretwo < matchestable.scoreone,\n                'draw' :matchestable.scoretwot ==  matchestable.scoreone\n            }\">\n\n                {{matchestable.teamtwo}}\n\n              </span>\n\n\n              <span>({{score(matchestable.scoretwo,matchestable.scoreone)}})</span>\n            </h3>\n            <ul class=\"list-unstyled\">\n              <li>Macauly Green (3)</li>\n              <li>Arham Stark (8)</li>\n              <li>Stephan Murillo (9)</li>\n              <li>Ned Ritter (5)</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/search/search.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero overlay\" style=\"background-image: url('assets/images/bg_3.jpg')\">\n    <div class=\"container\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-lg-9 mx-auto text-center\">\n                <h1 class=\"text-white\">search match</h1>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-\">\n                <form [formGroup]=\"searchForm\">\n                    <div class=\"form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"scoreone\" name=\"scoreone\"\n                            placeholder=\"score one\" />\n                    </div>\n                    <div\n                        *ngIf=\"searchForm.controls['scoreone'].invalid && (searchForm.controls['scoreone'].touched || searchForm.controls['scoreone'].dirty) \">\n                        <div *ngIf=\"searchForm.controls['scoreone'].errors.required\">\n                            scoreone is required\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"number\" class=\"form-control\" formControlName=\"scoretwo\" name=\"scoretwo\"\n                            placeholder=\"score two\" />\n                    </div>\n                    <div\n                        *ngIf=\"searchForm.controls['scoretwo'].invalid && (searchForm.controls['scoretwo'].touched || searchForm.controls['scoretwo'].dirty) \">\n                        <div *ngIf=\"searchForm.controls['scoretwo'].errors.required\">\n                            scoretwo is required\n                        </div>\n\n                    </div>\n\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" (click)=\" Search()\" value=\"search\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div *ngIf=\"T.length==0\" class=\"alert alert-danger\" role=\"alert\">\n        <a class=\"alert-link\">No Finded Match</a>\n    </div>\n\n</div>\n\n<div *ngFor=\"let m of T\">\n    <app-item-match [searchMatch]=\"m\"></app-item-match>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"signup\">\n</app-banner>\n\n<div class=\"site-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7\">\n        <form [formGroup]=\"signupForm\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"FirstName\" />\n          </div>\n          <div\n            *ngIf=\"signupForm.controls['firstName'].invalid && (signupForm.controls['firstName'].touched || signupForm.controls['firstName'].dirty )\">\n            <div *ngIf=\"signupForm.controls['firstName'].errors.required\">\n              FirstName is required\n            </div>\n            <div *ngIf=\"signupForm.controls['firstName'].errors.minlength\">\n              FirstName is must have at leats 3 chars\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"LastName\" />\n          </div>\n          <div\n            *ngIf=\"signupForm.controls['lastName'].invalid && (signupForm.controls['lastName'].touched || signupForm.controls['lastName'].dirty) \">\n            <div *ngIf=\"signupForm.controls['lastName'].errors.required\">\n              LastName is required\n            </div>\n            <div *ngIf=\"signupForm.controls['lastName'].errors.minlength\">\n              LastName is must have at leats 5 chars\n            </div>\n\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\" />\n          </div>\n          <div\n            *ngIf=\"signupForm.controls['email'].invalid && (signupForm.controls['email'].touched || signupForm.controls['email'].dirty) \">\n            <div *ngIf=\"signupForm.controls['email'].errors.required\">\n              email is required\n            </div>\n            <div *ngIf=\"signupForm.controls['email'].errors.email\">\n              email is not valid\n            </div>\n\n          </div>\n          <span class=\"text text-danger\">{{errorMsg}}</span>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"pwd\" placeholder=\"pwd\" />\n          </div>\n\n          <div\n            *ngIf=\"signupForm.controls['pwd'].invalid && (signupForm.controls['pwd'].touched || signupForm.controls['pwd'].dirty )  \">\n            <div *ngIf=\"signupForm.controls['pwd'].errors.required\">\n              password is required\n            </div>\n            <div *ngIf=\"signupForm.controls['pwd'].errors.minlength\">\n              password is must have at leats 3 chars\n            </div>\n            <div *ngIf=\"signupForm.controls['pwd'].errors.maxlength\">\n              paasword is must have at leats 12 chars\n            </div>\n            <div *ngIf=\"signupForm.controls['pwd'].errors.pattern\">\n              paasword is not valid\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"ConfirmePwd\" placeholder=\"ConfirmePwd\" />\n          </div>\n          <div>\n            <button class=\"btn btn-danger\" (click)=\"filepicker.click()\"> select your avatar</button>\n          </div>\n\n\n          <div class=\"form-group\" style=\"visibility: hidden ;\">\n            <input type=\"file\" class=\"form-control\" #filepicker (change)='onImageSelected($event)'\n              placeholder=\"fichier\" />\n          </div>\n\n          <div style=\"margin-bottom: 120px ;\">\n            <img [src]=\"imagePreview\" style=\"width:200px ; height:200px\" *ngIf=\"imagePreview\" alt=\"Avatar\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [disabled]=\"signupForm.invalid\" (click)=\"signup()\"\n              value=\"Signup\" />\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/stadium-table/stadium-table.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/stadium-table/stadium-table.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n\n    <div class=\"form-group\">\n        <input type=\"text-center\" class=\"form-control\" [(ngModel)]=\"term\" name=\"value\"\n            style=\"margin: 20px; width: 90% ; ;\" placeholder=\"Search\" />\n    </div>\n\n\n</form>\n\n\n\n\n<table class=\"table table-dark\">\n    <thead>\n        <tr>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\">capacity</th>\n            <th scope=\"col\">country</th>\n\n            <th scope=\"col\">Action</th>\n        </tr>\n    </thead>\n    <tbody id=\"adminid\">\n        <tr *ngFor=\" let item of  T\">\n            <td>{{item.name}}</td>\n            <td>{{item.capacite}}</td>\n            <td>{{item.country}}</td>\n            <td>\n\n                <button class=\"btn btn-success \" (click)=\"gotoDisplay(item._id)\">display</button>\n                <button class=\"btn btn-warning\" (click)=\"gotoEdit(item._id)\">Edit</button>\n                <button class=\"btn btn-danger \" (click)=\"deleteStadiumObj(item._id)\">Delete</button>\n            </td>\n        </tr>\n    </tbody>\n\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/team-sapi/team-sapi.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/team-sapi/team-sapi.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"Teams Api\">\n</app-banner>\n\n<div class=\"container\">\n\n\n    <table class=\"table table-dark\">\n        <thead>\n            <tr>\n                <th scope=\"col\">country_id</th>\n                <th scope=\"col\">name </th>\n                <th scope=\"col\">continent</th>\n\n\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of pageOfItems \">\n                <td>{{item.country.country_id}}</td>\n                <td>{{item.country.name}}</td>\n                <td>{{item.country.continent}}</td>\n                <td><img src=\"{{item.logo}}\" alt=\"\"></td>\n\n\n\n            </tr>\n        </tbody>\n    </table>\n\n    <div class=\"card-footer pb-0 pt-3\">\n        <jw-pagination [items]=\"T\" (changePage)=\"onChangePage($event)\" [pageSize]=\"5\"></jw-pagination>\n    </div>\n\n    <div class=\"d-flex justify-content-center\" *ngIf='!T'>\n        <app-loader></app-loader>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/teamtable/teamtable.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/teamtable/teamtable.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Stadium</th>\n      <th scope=\"col\">Country</th>\n      <th scope=\"col\">Owner</th>\n      <th scope=\"col\">Action</th>\n\n      <th></th>\n    </tr>\n  </thead>\n  <tbody id=\"idadmin\">\n    <tr *ngFor=\"let team of T\">\n      <td>{{team.Name}}</td>\n      <td>{{team.Stadium}}</td>\n      <td>{{team.Country}}</td>\n      <td>{{team.Owner}}</td>\n      <td>\n        <button class=\"btn btn-success \" (click)=\"gotoDisplay(team._id)\">display</button>\n        <button class=\"btn btn-warning\" (click)=\"gotoEdit(team._id)\">Edit</button>\n        <button class=\"btn btn-danger \" (click)=\"delete(team._id)\">Delete</button>\n      </td>\n\n\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/test/test.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/test/test.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"Test\">\n</app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form [formGroup]=\"testForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" placeholder=\"FirstName\" />\n                    </div>\n                    <div\n                        *ngIf=\"testForm.controls['firstName'].invalid && (testForm.controls['firstName'].touched || testForm.controls['firstName'].dirty )\">\n                        <div *ngIf=\"testForm.controls['firstName'].errors.required\">\n                            FirstName is required\n                        </div>\n                        <div *ngIf=\"testForm.controls['firstName'].errors.minlength\">\n                            FirstName is must have at leats 3 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" placeholder=\"LastName\" />\n                    </div>\n                    <div\n                        *ngIf=\"testForm.controls['lastName'].invalid && (testForm.controls['lastName'].touched || testForm.controls['lastName'].dirty) \">\n                        <div *ngIf=\"testForm.controls['lastName'].errors.required\">\n                            LastName is required\n                        </div>\n                        <div *ngIf=\"testForm.controls['lastName'].errors.minlength\">\n                            LastName is must have at leats 5 chars\n                        </div>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\" />\n                    </div>\n                    <div\n                        *ngIf=\"testForm.controls['email'].invalid && (testForm.controls['email'].touched || testForm.controls['email'].dirty) \">\n                        <div *ngIf=\"testForm.controls['email'].errors.required\">\n                            email is required\n                        </div>\n                        <div *ngIf=\"testForm.controls['email'].errors.email\">\n                            email is not valid\n                        </div>\n\n                    </div>\n                    <span class=\"text text-danger\">{{errorMsg}}</span>\n\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [disabled]=\"testForm.invalid\"\n                            (click)=\"signup()\" value=\"Signup\" />\n                    </div>\n\n                    <table class=\"table table-dark \">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\">firstName</th>\n                                <th scope=\"col\">LastName</th>\n                                <th scope=\"col\">email</th>\n                                <th scope=\"col\">Action</th>\n\n                                <th></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let coache of T\">\n                                <td>{{coache.firstName}}</td>\n                                <td>{{coache.lastName}}</td>\n                                <td>{{coache.email}}</td>\n\n                                <td>\n                                    <button class=\"btn btn-success \" (click)=\"gotoDisplay(user.id)\">display</button>\n                                    <button class=\"btn btn-warning\" (click)=\"gotoEdit(user.id)\">Edit</button>\n                                    <button class=\"btn btn-danger \" (click)=\"deleteMatch(user.id)\">Delete</button>\n                                </td>\n\n\n                            </tr>\n                        </tbody>\n                    </table>\n                </form>\n\n\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/useres-table/useres-table.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/useres-table/useres-table.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-dark\">\n    <thead>\n        <tr>\n            <th scope=\"col\">firstName</th>\n            <th scope=\"col\">LastName</th>\n            <th scope=\"col\">email</th>\n            <th scope=\"col\">images</th>\n            <th scope=\"col\">Action</th>\n\n            <th></th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let user of users\">\n            <td>{{user.firstName}}</td>\n            <td>{{user.lastName}}</td>\n            <td>{{user.email}}</td>\n            <td><img [src]=\"user.avatar\" style=\"width:100px ; height: 100px;\"></td>\n            <td>\n                <button class=\"btn btn-success \" (click)=\"gotoDisplay(user._id)\">display</button>\n                <button class=\"btn btn-warning\" (click)=\"gotoEdit(user._id)\">Edit</button>\n                <button class=\"btn btn-danger \" (click)=\"deleteUser(user._id)\">Delete</button>\n            </td>\n\n\n        </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/weather/weather.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-banner title=\"weather\">\n</app-banner>\n\n<div class=\"site-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-7\">\n                <form [formGroup]=\"weatherForm\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" formControlName=\"country\" placeholder=\"country\" />\n                    </div>\n                    <div\n                        *ngIf=\"weatherForm.controls['country'].invalid && (weatherForm.controls['country'].touched || weatherForm.controls['country'].dirty )\">\n                        <div *ngIf=\"weatherForm.controls['country'].errors.required\">\n                            country is required\n                        </div>\n\n                    </div>\n                    <div class=\"text text-danger\">Teamperature : <span\n                            class=\"text text-black\">{{resultData?.temp}}</span> </div><br>\n                    <div class=\"text text-danger\">Humidity: <span\n                            class=\"text text-black\">{{resultData?.humidity}}</span> </div><br>\n                    <div class=\"text text-danger\">Windspeed:<span\n                            class=\"text text-black\">{{resultData?.windspeed}}</span> </div><br>\n                    <img [src]=\"iconUrl\" alt=\"\">\n\n\n\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary py-3 px-5\" [disabled]=\"weatherForm.invalid\"\n                            (click)=\"serach()\" value=\"Search\" />\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-data/add-data.component */ "./src/app/components/add-data/add-data.component.ts");
/* harmony import */ var _components_addmatchs_addmatchs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addmatchs/addmatchs.component */ "./src/app/components/addmatchs/addmatchs.component.ts");
/* harmony import */ var _components_addplayers_addplayers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/addplayers/addplayers.component */ "./src/app/components/addplayers/addplayers.component.ts");
/* harmony import */ var _components_addteams_addteams_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/addteams/addteams.component */ "./src/app/components/addteams/addteams.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add-stadium/add-stadium.component */ "./src/app/components/add-stadium/add-stadium.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_display_match_display_match_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/display-match/display-match.component */ "./src/app/components/display-match/display-match.component.ts");
/* harmony import */ var _components_display_teams_display_teams_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/display-teams/display-teams.component */ "./src/app/components/display-teams/display-teams.component.ts");
/* harmony import */ var _components_edit_match_edit_match_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/edit-match/edit-match.component */ "./src/app/components/edit-match/edit-match.component.ts");
/* harmony import */ var _components_edit_players_edit_players_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/edit-players/edit-players.component */ "./src/app/components/edit-players/edit-players.component.ts");
/* harmony import */ var _components_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/edit-teams/edit-teams.component */ "./src/app/components/edit-teams/edit-teams.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_mathchs_mathchs_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mathchs/mathchs.component */ "./src/app/components/mathchs/mathchs.component.ts");
/* harmony import */ var _components_mymatches_mymatches_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mymatches/mymatches.component */ "./src/app/components/mymatches/mymatches.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_team_sapi_team_sapi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/team-sapi/team-sapi.component */ "./src/app/components/team-sapi/team-sapi.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var _components_display_players_display_players_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/display-players/display-players.component */ "./src/app/components/display-players/display-players.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_logintest_logintest_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/logintest/logintest.component */ "./src/app/components/logintest/logintest.component.ts");
/* harmony import */ var _components_players_players_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/players/players.component */ "./src/app/components/players/players.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");






























const routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: "", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "registre", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"] },
    { path: "registreAdmin", component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"] },
    { path: "matches", component: _components_mathchs_mathchs_component__WEBPACK_IMPORTED_MODULE_17__["MathchsComponent"] },
    { path: "players", component: _components_players_players_component__WEBPACK_IMPORTED_MODULE_26__["PlayersComponent"] },
    { path: "addmatch", component: _components_addmatchs_addmatchs_component__WEBPACK_IMPORTED_MODULE_4__["AddmatchsComponent"] },
    { path: "addteam", component: _components_addteams_addteams_component__WEBPACK_IMPORTED_MODULE_6__["AddteamsComponent"] },
    { path: "addpalyer", component: _components_addplayers_addplayers_component__WEBPACK_IMPORTED_MODULE_5__["AddplayersComponent"] },
    {
        path: "dashboard", component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
    },
    { path: "mymatches", component: _components_mymatches_mymatches_component__WEBPACK_IMPORTED_MODULE_18__["MymatchesComponent"] },
    { path: "displyMatch/:id", component: _components_display_match_display_match_component__WEBPACK_IMPORTED_MODULE_10__["DisplayMatchComponent"] },
    { path: "displyTeams/:id", component: _components_display_teams_display_teams_component__WEBPACK_IMPORTED_MODULE_11__["DisplayTeamsComponent"] },
    { path: "displayplayer/:id", component: _components_display_players_display_players_component__WEBPACK_IMPORTED_MODULE_23__["DisplayPlayersComponent"] },
    { path: "editMAtch/:id", component: _components_edit_match_edit_match_component__WEBPACK_IMPORTED_MODULE_12__["EditMatchComponent"] },
    { path: "editplayers/:id", component: _components_edit_players_edit_players_component__WEBPACK_IMPORTED_MODULE_13__["EditPlayersComponent"] },
    { path: "editTeams/:id", component: _components_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_14__["EditTeamsComponent"] },
    { path: "profile/:id", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_27__["ProfileComponent"] },
    { path: "editProfile/:id", component: _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_24__["EditProfileComponent"] },
    { path: "search", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_19__["SearchComponent"] },
    { path: "loginTest", component: _components_logintest_logintest_component__WEBPACK_IMPORTED_MODULE_25__["LogintestComponent"] },
    { path: "addStadium", component: _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_8__["AddStadiumComponent"] },
    { path: "editStadium/:id", component: _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_8__["AddStadiumComponent"] },
    { path: "editStadium/:id", component: _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_8__["AddStadiumComponent"] },
    { path: "AddData", component: _components_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_3__["AddDataComponent"] },
    { path: "weather", component: _weather_weather_component__WEBPACK_IMPORTED_MODULE_28__["WeatherComponent"] },
    { path: "test", component: _components_test_test_component__WEBPACK_IMPORTED_MODULE_22__["TestComponent"] },
    { path: "apiTeams", component: _components_team_sapi_team_sapi_component__WEBPACK_IMPORTED_MODULE_21__["TeamSapiComponent"] },
    { path: "**", component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_29__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sport';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_cup_event_cup_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cup-event/cup-event.component */ "./src/app/components/cup-event/cup-event.component.ts");
/* harmony import */ var _components_scores_scores_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/scores/scores.component */ "./src/app/components/scores/scores.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ranking/ranking.component */ "./src/app/components/ranking/ranking.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_mathchs_mathchs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mathchs/mathchs.component */ "./src/app/components/mathchs/mathchs.component.ts");
/* harmony import */ var _components_match_match_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/match/match.component */ "./src/app/components/match/match.component.ts");
/* harmony import */ var _components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/player-info/player-info.component */ "./src/app/components/player-info/player-info.component.ts");
/* harmony import */ var _components_players_players_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/players/players.component */ "./src/app/components/players/players.component.ts");
/* harmony import */ var _components_addmatchs_addmatchs_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/addmatchs/addmatchs.component */ "./src/app/components/addmatchs/addmatchs.component.ts");
/* harmony import */ var _components_addteams_addteams_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/addteams/addteams.component */ "./src/app/components/addteams/addteams.component.ts");
/* harmony import */ var _components_addplayers_addplayers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/addplayers/addplayers.component */ "./src/app/components/addplayers/addplayers.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_matchestable_matchestable_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/matchestable/matchestable.component */ "./src/app/components/matchestable/matchestable.component.ts");
/* harmony import */ var _components_teamtable_teamtable_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/teamtable/teamtable.component */ "./src/app/components/teamtable/teamtable.component.ts");
/* harmony import */ var _components_playertable_playertable_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/playertable/playertable.component */ "./src/app/components/playertable/playertable.component.ts");
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/article/article.component */ "./src/app/components/article/article.component.ts");
/* harmony import */ var _components_mymatches_mymatches_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mymatches/mymatches.component */ "./src/app/components/mymatches/mymatches.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_display_match_display_match_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/display-match/display-match.component */ "./src/app/components/display-match/display-match.component.ts");
/* harmony import */ var _components_display_teams_display_teams_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/display-teams/display-teams.component */ "./src/app/components/display-teams/display-teams.component.ts");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/banner/banner.component */ "./src/app/components/banner/banner.component.ts");
/* harmony import */ var _components_display_players_display_players_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/display-players/display-players.component */ "./src/app/components/display-players/display-players.component.ts");
/* harmony import */ var _components_edit_match_edit_match_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/edit-match/edit-match.component */ "./src/app/components/edit-match/edit-match.component.ts");
/* harmony import */ var _components_edit_players_edit_players_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/edit-players/edit-players.component */ "./src/app/components/edit-players/edit-players.component.ts");
/* harmony import */ var _components_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/edit-teams/edit-teams.component */ "./src/app/components/edit-teams/edit-teams.component.ts");
/* harmony import */ var _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pipes/reverse.pipe */ "./src/app/pipes/reverse.pipe.ts");
/* harmony import */ var _pipes_asterix_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pipes/asterix.pipe */ "./src/app/pipes/asterix.pipe.ts");
/* harmony import */ var _pipes_my_filtre_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/my-filtre.pipe */ "./src/app/pipes/my-filtre.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_useres_table_useres_table_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/useres-table/useres-table.component */ "./src/app/components/useres-table/useres-table.component.ts");
/* harmony import */ var _components_edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/edit-users/edit-users.component */ "./src/app/components/edit-users/edit-users.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/edit-profile/edit-profile.component */ "./src/app/components/edit-profile/edit-profile.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_item_match_item_match_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./components/item-match/item-match.component */ "./src/app/components/item-match/item-match.component.ts");
/* harmony import */ var _components_logintest_logintest_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./components/logintest/logintest.component */ "./src/app/components/logintest/logintest.component.ts");
/* harmony import */ var _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./components/add-stadium/add-stadium.component */ "./src/app/components/add-stadium/add-stadium.component.ts");
/* harmony import */ var _components_stadium_table_stadium_table_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./components/stadium-table/stadium-table.component */ "./src/app/components/stadium-table/stadium-table.component.ts");
/* harmony import */ var _components_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./components/add-data/add-data.component */ "./src/app/components/add-data/add-data.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _components_test_test_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./components/test/test.component */ "./src/app/components/test/test.component.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/fesm2015/jw-angular-pagination.js");
/* harmony import */ var _components_team_sapi_team_sapi_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./components/team-sapi/team-sapi.component */ "./src/app/components/team-sapi/team-sapi.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
























































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
            _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_cup_event_cup_event_component__WEBPACK_IMPORTED_MODULE_10__["CupEventComponent"],
            _components_scores_scores_component__WEBPACK_IMPORTED_MODULE_11__["ScoresComponent"],
            _components_news_news_component__WEBPACK_IMPORTED_MODULE_12__["NewsComponent"],
            _components_ranking_ranking_component__WEBPACK_IMPORTED_MODULE_13__["RankingComponent"],
            _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_14__["BlogComponent"],
            _components_mathchs_mathchs_component__WEBPACK_IMPORTED_MODULE_15__["MathchsComponent"],
            _components_match_match_component__WEBPACK_IMPORTED_MODULE_16__["MatchComponent"],
            _components_player_info_player_info_component__WEBPACK_IMPORTED_MODULE_17__["PlayerInfoComponent"],
            _components_players_players_component__WEBPACK_IMPORTED_MODULE_18__["PlayersComponent"],
            _components_addmatchs_addmatchs_component__WEBPACK_IMPORTED_MODULE_19__["AddmatchsComponent"],
            _components_addteams_addteams_component__WEBPACK_IMPORTED_MODULE_20__["AddteamsComponent"],
            _components_addplayers_addplayers_component__WEBPACK_IMPORTED_MODULE_21__["AddplayersComponent"],
            _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
            _components_matchestable_matchestable_component__WEBPACK_IMPORTED_MODULE_23__["MatchestableComponent"],
            _components_teamtable_teamtable_component__WEBPACK_IMPORTED_MODULE_24__["TeamtableComponent"],
            _components_playertable_playertable_component__WEBPACK_IMPORTED_MODULE_25__["PlayertableComponent"],
            _components_article_article_component__WEBPACK_IMPORTED_MODULE_26__["ArticleComponent"],
            _components_mymatches_mymatches_component__WEBPACK_IMPORTED_MODULE_27__["MymatchesComponent"],
            _components_display_match_display_match_component__WEBPACK_IMPORTED_MODULE_29__["DisplayMatchComponent"],
            _components_display_teams_display_teams_component__WEBPACK_IMPORTED_MODULE_30__["DisplayTeamsComponent"],
            _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_31__["BannerComponent"],
            _components_display_players_display_players_component__WEBPACK_IMPORTED_MODULE_32__["DisplayPlayersComponent"],
            _components_edit_match_edit_match_component__WEBPACK_IMPORTED_MODULE_33__["EditMatchComponent"],
            _components_edit_players_edit_players_component__WEBPACK_IMPORTED_MODULE_34__["EditPlayersComponent"],
            _components_edit_teams_edit_teams_component__WEBPACK_IMPORTED_MODULE_35__["EditTeamsComponent"],
            _pipes_reverse_pipe__WEBPACK_IMPORTED_MODULE_36__["ReversePipe"],
            _pipes_asterix_pipe__WEBPACK_IMPORTED_MODULE_37__["AsterixPipe"],
            _pipes_my_filtre_pipe__WEBPACK_IMPORTED_MODULE_38__["MyFiltrePipe"],
            _components_useres_table_useres_table_component__WEBPACK_IMPORTED_MODULE_40__["UseresTableComponent"],
            _components_edit_users_edit_users_component__WEBPACK_IMPORTED_MODULE_41__["EditUsersComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_42__["ProfileComponent"],
            _components_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_43__["EditProfileComponent"],
            _components_search_search_component__WEBPACK_IMPORTED_MODULE_44__["SearchComponent"],
            _components_item_match_item_match_component__WEBPACK_IMPORTED_MODULE_45__["ItemMatchComponent"],
            _components_logintest_logintest_component__WEBPACK_IMPORTED_MODULE_46__["LogintestComponent"],
            _components_add_stadium_add_stadium_component__WEBPACK_IMPORTED_MODULE_47__["AddStadiumComponent"],
            _components_stadium_table_stadium_table_component__WEBPACK_IMPORTED_MODULE_48__["StadiumTableComponent"],
            _components_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_49__["AddDataComponent"],
            _weather_weather_component__WEBPACK_IMPORTED_MODULE_50__["WeatherComponent"],
            _components_test_test_component__WEBPACK_IMPORTED_MODULE_51__["TestComponent"],
            _components_team_sapi_team_sapi_component__WEBPACK_IMPORTED_MODULE_53__["TeamSapiComponent"],
            _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_54__["LoaderComponent"],
            _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_55__["NotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_39__["HttpClientModule"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_52__["JwPaginationModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.getIsAuth()) {
            this.router.navigate(['']);
            return false;
        }
        else {
            return true;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(http, route) {
        this.http = http;
        this.route = route;
        this.isAuthenticated = false;
        this.isClent = false;
        this.isAdmin = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authClient = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authAdmin = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.err = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.errorMsg = "Please check Email/Pwd";
        this.authURl = "http://localhost:3000/users";
        var currentUser = (localStorage.getItem('userId'));
        if (currentUser === null) {
            this.isAuthenticated = false;
        }
        else {
            this.isAuthenticated = true;
            var currentUser = (localStorage.getItem('userRole'));
            if (currentUser === "client") {
                this.isClent = true;
                this.authClient.next(true);
            }
            else if (currentUser === "admin") {
                this.isAdmin = true;
                this.authAdmin.next(true);
            }
            else {
            }
        }
    }
    getToken() {
        return this.token;
    }
    getmsg() {
        return this.errorMsg;
    }
    getIsAuth() {
        return this.isAuthenticated;
    }
    getIsAuthClient() {
        return this.isClent;
    }
    getIsAuthAdmin() {
        return this.isAdmin;
    }
    getUserId() {
        return this.userId;
    }
    getStatut() {
        return this.statut;
    }
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    getAuthClient() {
        return this.authClient.asObservable();
    }
    getAuthAdmin() {
        return this.authAdmin.asObservable();
    }
    getRole() {
        return this.userRole;
    }
    login(email, pwd) {
        const authData = { email: email, pwd: pwd };
        return this.http
            .post(`${this.authURl}/login`, authData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
            this.err.next(null);
            const token = response.token;
            this.token = token;
            if (response.userRole === "client") {
                this.isClent = true;
                this.authClient.next(true);
            }
            else {
                this.isAdmin = true;
                this.authAdmin.next(true);
            }
            if (token) {
                const expiresInDuration = response.expiresIn;
                this.setAuthTimer(expiresInDuration);
                this.isAuthenticated = true;
                this.userId = response.userId;
                this.userRole = response.userRole;
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationDate = new Date(now.getTime() +
                    expiresInDuration * 1000);
                this.saveAuthData(token, expirationDate, this.userId, this.userRole);
                if (response.userRole === 'admin') {
                    this.route.navigate(["/dashboard"]);
                }
                else {
                    this.route.navigate([""]);
                }
                return response.token;
            }
        }, err => {
            this.err.next(err);
        }));
    }
    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.isClent = false;
        this.isAdmin = false;
        this.authStatusListener.next(false);
        this.authClient.next(false);
        this.authAdmin.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.route.navigate(["login"]);
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        const now = new Date();
        const expiresIn = authInformation.expirationDate.getTime() -
            now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.userId = authInformation.userId;
            this.userRole = authInformation.userRole;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const expirationDate = localStorage.getItem("expiration");
        const userId = localStorage.getItem("userId");
        const userRole = localStorage.getItem("userRole");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            userRole: userRole,
        };
    }
    setAuthTimer(duration) {
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }
    saveAuthData(token, expirationDate, userId, userRole) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
        localStorage.setItem("userRole", userRole);
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/components/add-data/add-data.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-data/add-data.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLWRhdGEvYWRkLWRhdGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-data/add-data.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-data/add-data.component.ts ***!
  \***********************************************************/
/*! exports provided: AddDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataComponent", function() { return AddDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_data_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/data-services.service */ "./src/app/data-services.service.ts");



let AddDataComponent = class AddDataComponent {
    constructor(dataServices) {
        this.dataServices = dataServices;
    }
    ngOnInit() {
    }
    addData() {
        this.dataServices.getAllData().subscribe((response) => {
            console.log("here into data", response.message);
            if (response.message == "data save into DB") {
                this.messageData = response.message;
            }
        });
    }
};
AddDataComponent.ctorParameters = () => [
    { type: src_app_data_services_service__WEBPACK_IMPORTED_MODULE_2__["DataServicesService"] }
];
AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-data',
        template: __webpack_require__(/*! raw-loader!./add-data.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-data/add-data.component.html"),
        styles: [__webpack_require__(/*! ./add-data.component.css */ "./src/app/components/add-data/add-data.component.css")]
    })
], AddDataComponent);



/***/ }),

/***/ "./src/app/components/add-stadium/add-stadium.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-stadium/add-stadium.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkLXN0YWRpdW0vYWRkLXN0YWRpdW0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/add-stadium/add-stadium.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-stadium/add-stadium.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddStadiumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStadiumComponent", function() { return AddStadiumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stadiumservices.service */ "./src/app/services/stadiumservices.service.ts");




let AddStadiumComponent = class AddStadiumComponent {
    constructor(router, stadiumservices, activatedRoute) {
        this.router = router;
        this.stadiumservices = stadiumservices;
        this.activatedRoute = activatedRoute;
        this.stadium = {};
        this.title = "Add Stadium";
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get("id");
        if (this.id) {
            this.title = "Edit Stadium";
            this.stadiumservices.getStadiumById(this.id).subscribe((response) => {
                this.stadium = response;
            });
        }
    }
    AddStadium() {
        if (this.id) {
            this.stadiumservices.editStadium(this.stadium).subscribe((response) => {
                console.log("her ino edit", response);
            });
            this.router.navigate(["dashboard"]);
        }
        else {
            this.stadiumservices.addStadium(this.stadium).subscribe((response) => {
                console.log("here reponse after adding match", response);
            });
            this.router.navigate(["dashboard"]);
        }
    }
};
AddStadiumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_3__["StadiumservicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AddStadiumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-stadium',
        template: __webpack_require__(/*! raw-loader!./add-stadium.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/add-stadium/add-stadium.component.html"),
        styles: [__webpack_require__(/*! ./add-stadium.component.css */ "./src/app/components/add-stadium/add-stadium.component.css")]
    })
], AddStadiumComponent);



/***/ }),

/***/ "./src/app/components/addmatchs/addmatchs.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/addmatchs/addmatchs.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkbWF0Y2hzL2FkZG1hdGNocy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/addmatchs/addmatchs.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/addmatchs/addmatchs.component.ts ***!
  \*************************************************************/
/*! exports provided: AddmatchsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmatchsComponent", function() { return AddmatchsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");
/* harmony import */ var src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/stadiumservices.service */ "./src/app/services/stadiumservices.service.ts");





let AddmatchsComponent = class AddmatchsComponent {
    constructor(router, matchService, stadiumServices) {
        this.router = router;
        this.matchService = matchService;
        this.stadiumServices = stadiumServices;
        this.match = {};
        this.T = [];
    }
    ngOnInit() {
        this.stadiumServices.displayAllStadium().subscribe((response) => {
            this.T = response.satdiums;
        });
    }
    addmatch() {
        this.match.stadiumId = this.stadiumId;
        this.matchService.addMatch(this.match).subscribe((response) => {
            console.log("here reponse after adding match", response.message);
            this.router.navigate(["dashboard"]);
        });
    }
    onSelect(event) {
        this.stadiumId = event.target.value;
    }
};
AddmatchsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"] },
    { type: src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_4__["StadiumservicesService"] }
];
AddmatchsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addmatchs',
        template: __webpack_require__(/*! raw-loader!./addmatchs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/addmatchs/addmatchs.component.html"),
        styles: [__webpack_require__(/*! ./addmatchs.component.css */ "./src/app/components/addmatchs/addmatchs.component.css")]
    })
], AddmatchsComponent);



/***/ }),

/***/ "./src/app/components/addplayers/addplayers.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/addplayers/addplayers.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkcGxheWVycy9hZGRwbGF5ZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/addplayers/addplayers.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/addplayers/addplayers.component.ts ***!
  \***************************************************************/
/*! exports provided: AddplayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplayersComponent", function() { return AddplayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");





let AddplayersComponent = class AddplayersComponent {
    constructor(route, playerServices, fbuiulder) {
        this.route = route;
        this.playerServices = playerServices;
        this.fbuiulder = fbuiulder;
        this.player = {};
    }
    ngOnInit() {
        this.playerForm = this.fbuiulder.group({
            name: [''],
            numero: [''],
            position: [''],
            team: [''],
            age: [''],
            img: ['']
        });
    }
    addPlayer() {
        this.playerServices.addPlayer(this.playerForm.value, this.playerForm.value.img).subscribe((response) => {
            console.log("here thsi a new object", response.message);
            this.route.navigate(["dashboard"]);
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        this.playerForm.patchValue({ img: file });
        this.playerForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
};
AddplayersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
AddplayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addplayers',
        template: __webpack_require__(/*! raw-loader!./addplayers.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/addplayers/addplayers.component.html"),
        styles: [__webpack_require__(/*! ./addplayers.component.css */ "./src/app/components/addplayers/addplayers.component.css")]
    })
], AddplayersComponent);



/***/ }),

/***/ "./src/app/components/addteams/addteams.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/addteams/addteams.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkdGVhbXMvYWRkdGVhbXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/addteams/addteams.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/addteams/addteams.component.ts ***!
  \***********************************************************/
/*! exports provided: AddteamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddteamsComponent", function() { return AddteamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");




let AddteamsComponent = class AddteamsComponent {
    constructor(teamsService, route) {
        this.teamsService = teamsService;
        this.route = route;
        this.team = {};
    }
    ngOnInit() {
    }
    addteam() {
        this.teamsService.addTeams(this.team).subscribe((response) => {
            console.log("here this a new object", response);
        });
        this.route.navigate(['dashboard']);
    }
};
AddteamsComponent.ctorParameters = () => [
    { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddteamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addteams',
        template: __webpack_require__(/*! raw-loader!./addteams.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/addteams/addteams.component.html"),
        styles: [__webpack_require__(/*! ./addteams.component.css */ "./src/app/components/addteams/addteams.component.css")]
    })
], AddteamsComponent);



/***/ }),

/***/ "./src/app/components/article/article.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/article/article.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS9hcnRpY2xlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/article/article.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/*! exports provided: ArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleComponent", function() { return ArticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArticleComponent = class ArticleComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArticleComponent.prototype, "a", void 0);
ArticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: __webpack_require__(/*! raw-loader!./article.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/article/article.component.html"),
        styles: [__webpack_require__(/*! ./article.component.css */ "./src/app/components/article/article.component.css")]
    })
], ArticleComponent);



/***/ }),

/***/ "./src/app/components/banner/banner.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/banner/banner.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/banner/banner.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BannerComponent = class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BannerComponent.prototype, "title", void 0);
BannerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-banner',
        template: __webpack_require__(/*! raw-loader!./banner.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/banner/banner.component.html"),
        styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/components/banner/banner.component.css")]
    })
], BannerComponent);



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BlogComponent = class BlogComponent {
    constructor() {
        this.Tblogs = [{ id: 1, date: " 8 - 10 - 1987", description: "hard party", offre: "gratuit" },
            { id: 2, date: " 8 - 10 - 1987", description: "hard party", offre: "gratuit" },
            { id: 3, date: "8 - 10 - 1987", description: "hard party", offre: "gratuit" },
            { id: 4, date: "8 - 10 - 1987", description: "hard party", offre: "gratuit" }];
    }
    ngOnInit() {
    }
};
BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-blog',
        template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/blog/blog.component.html"),
        styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
    })
], BlogComponent);



/***/ }),

/***/ "./src/app/components/cup-event/cup-event.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/cup-event/cup-event.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VwLWV2ZW50L2N1cC1ldmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cup-event/cup-event.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/cup-event/cup-event.component.ts ***!
  \*************************************************************/
/*! exports provided: CupEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupEventComponent", function() { return CupEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CupEventComponent = class CupEventComponent {
    constructor() { }
    ngOnInit() {
    }
};
CupEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cup-event',
        template: __webpack_require__(/*! raw-loader!./cup-event.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cup-event/cup-event.component.html"),
        styles: [__webpack_require__(/*! ./cup-event.component.css */ "./src/app/components/cup-event/cup-event.component.css")]
    })
], CupEventComponent);



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    // title: string = 'Dashboard';
    constructor() { }
    ngOnInit() {
        this.actualDate = new Date();
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/components/display-match/display-match.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/display-match/display-match.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1tYXRjaC9kaXNwbGF5LW1hdGNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/display-match/display-match.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-match/display-match.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayMatchComponent", function() { return DisplayMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");




let DisplayMatchComponent = class DisplayMatchComponent {
    constructor(activatedRoute, matcheServices) {
        this.activatedRoute = activatedRoute;
        this.matcheServices = matcheServices;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.matcheServices.displayMatch(this.id).subscribe((response) => { this.match = response; });
        console.log("here finded", this.match);
    }
};
DisplayMatchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"] }
];
DisplayMatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-match',
        template: __webpack_require__(/*! raw-loader!./display-match.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-match/display-match.component.html"),
        styles: [__webpack_require__(/*! ./display-match.component.css */ "./src/app/components/display-match/display-match.component.css")]
    })
], DisplayMatchComponent);



/***/ }),

/***/ "./src/app/components/display-players/display-players.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/display-players/display-players.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS1wbGF5ZXJzL2Rpc3BsYXktcGxheWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/display-players/display-players.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/display-players/display-players.component.ts ***!
  \*************************************************************************/
/*! exports provided: DisplayPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayPlayersComponent", function() { return DisplayPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");




let DisplayPlayersComponent = class DisplayPlayersComponent {
    constructor(activatedroute, playersService) {
        this.activatedroute = activatedroute;
        this.playersService = playersService;
    }
    ngOnInit() {
        this.id = this.activatedroute.snapshot.paramMap.get('id');
        this.playersService.displayPlayer(this.id).subscribe((response) => { this.player = response; });
    }
};
DisplayPlayersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] }
];
DisplayPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-players',
        template: __webpack_require__(/*! raw-loader!./display-players.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-players/display-players.component.html"),
        styles: [__webpack_require__(/*! ./display-players.component.css */ "./src/app/components/display-players/display-players.component.css")]
    })
], DisplayPlayersComponent);



/***/ }),

/***/ "./src/app/components/display-teams/display-teams.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/display-teams/display-teams.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlzcGxheS10ZWFtcy9kaXNwbGF5LXRlYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/display-teams/display-teams.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-teams/display-teams.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayTeamsComponent", function() { return DisplayTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");




let DisplayTeamsComponent = class DisplayTeamsComponent {
    constructor(activatedRoute, teamService) {
        this.activatedRoute = activatedRoute;
        this.teamService = teamService;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.teamService.displayTeamById(this.id).subscribe((response) => { this.team = response; });
        console.log("here finded", this.team);
    }
};
DisplayTeamsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] }
];
DisplayTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-display-teams',
        template: __webpack_require__(/*! raw-loader!./display-teams.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/display-teams/display-teams.component.html"),
        styles: [__webpack_require__(/*! ./display-teams.component.css */ "./src/app/components/display-teams/display-teams.component.css")]
    })
], DisplayTeamsComponent);



/***/ }),

/***/ "./src/app/components/edit-match/edit-match.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-match/edit-match.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1tYXRjaC9lZGl0LW1hdGNoLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-match/edit-match.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-match/edit-match.component.ts ***!
  \***************************************************************/
/*! exports provided: EditMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMatchComponent", function() { return EditMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");




let EditMatchComponent = class EditMatchComponent {
    constructor(activatedRoute, router, matchService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.matchService = matchService;
        this.match = {};
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.matchService.displayMatch(this.id).subscribe((response) => {
            this.match = response;
        });
        // this.match = this.T.find((obj) => { return obj.id == this.id });
    }
    editMatch() {
        this.matchService.editMatch(this.match).subscribe((response) => {
            console.log("here this a new  object", response);
        });
        this.router.navigate(['dashboard']);
    }
};
EditMatchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"] }
];
EditMatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-match',
        template: __webpack_require__(/*! raw-loader!./edit-match.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-match/edit-match.component.html"),
        styles: [__webpack_require__(/*! ./edit-match.component.css */ "./src/app/components/edit-match/edit-match.component.css")]
    })
], EditMatchComponent);



/***/ }),

/***/ "./src/app/components/edit-players/edit-players.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-players/edit-players.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wbGF5ZXJzL2VkaXQtcGxheWVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-players/edit-players.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-players/edit-players.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditPlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlayersComponent", function() { return EditPlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");





let EditPlayersComponent = class EditPlayersComponent {
    constructor(playersService, route, activatedroute) {
        this.playersService = playersService;
        this.route = route;
        this.activatedroute = activatedroute;
        this.player = {};
        this.playerForm = _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"];
    }
    ngOnInit() {
        this.id = this.activatedroute.snapshot.paramMap.get('id');
        this.playersService.displayPlayer(this.id).subscribe((response) => { this.player = response; });
    }
    editplayer() {
        this.playersService.editPlayer(this.player).subscribe((response) => {
            console.log("here this new object", response.message);
        });
        this.route.navigate(['dashboard']);
    }
};
EditPlayersComponent.ctorParameters = () => [
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_4__["PlayersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditPlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-players',
        template: __webpack_require__(/*! raw-loader!./edit-players.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-players/edit-players.component.html"),
        styles: [__webpack_require__(/*! ./edit-players.component.css */ "./src/app/components/edit-players/edit-players.component.css")]
    })
], EditPlayersComponent);



/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/edit-profile/edit-profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/edit-profile/edit-profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





let EditProfileComponent = class EditProfileComponent {
    constructor(activatedRoute, router, usersService, formBuilder) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.usersService = usersService;
        this.formBuilder = formBuilder;
        this.user = {};
    }
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            LastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9_-]{8,15}$")]],
            ConfirmePwd: ['']
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.usersService.getUser(this.id).subscribe((response) => {
            this.user = response.user;
        });
    }
    editUser() {
        this.usersService.editUser(this.user).subscribe((response) => {
            console.log("here this a new  object", response.message);
        });
        this.router.navigate(['dashboard']);
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/components/edit-profile/edit-profile.component.css")]
    })
], EditProfileComponent);



/***/ }),

/***/ "./src/app/components/edit-teams/edit-teams.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-teams/edit-teams.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC10ZWFtcy9lZGl0LXRlYW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-teams/edit-teams.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-teams/edit-teams.component.ts ***!
  \***************************************************************/
/*! exports provided: EditTeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTeamsComponent", function() { return EditTeamsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");




let EditTeamsComponent = class EditTeamsComponent {
    constructor(activatedroute, teamsService, route) {
        this.activatedroute = activatedroute;
        this.teamsService = teamsService;
        this.route = route;
        this.team = {};
        this.Tteams = [];
    }
    ngOnInit() {
        this.id = this.activatedroute.snapshot.paramMap.get('id');
        this.teamsService.displayTeamById(this.id).subscribe((response) => {
            this.team = response;
        });
    }
    editteam() {
        this.teamsService.editTeams(this.team).subscribe((response) => {
            console.log("here this a new object", response);
        });
        this.route.navigate(['dashboard']);
    }
};
EditTeamsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
EditTeamsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-teams',
        template: __webpack_require__(/*! raw-loader!./edit-teams.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-teams/edit-teams.component.html"),
        styles: [__webpack_require__(/*! ./edit-teams.component.css */ "./src/app/components/edit-teams/edit-teams.component.css")]
    })
], EditTeamsComponent);



/***/ }),

/***/ "./src/app/components/edit-users/edit-users.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/edit-users/edit-users.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC11c2Vycy9lZGl0LXVzZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/edit-users/edit-users.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-users/edit-users.component.ts ***!
  \***************************************************************/
/*! exports provided: EditUsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUsersComponent", function() { return EditUsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





let EditUsersComponent = class EditUsersComponent {
    constructor(router, userSERvices, formbuilder, activated) {
        this.router = router;
        this.userSERvices = userSERvices;
        this.formbuilder = formbuilder;
        this.activated = activated;
        this.user = {};
    }
    ngOnInit() {
        this.id = this.activated.snapshot.paramMap.get('id');
        this.userSERvices.getUser(this.id).subscribe((response) => {
            this.user = response.user;
        });
        this.signupForm = this.formbuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9_-]{8,15}$")]],
            ConfirmePwd: [''],
            img: ['']
        });
    }
    editUser() {
        this.userSERvices.editUser(this.user).subscribe((response) => {
            console.log("here this a new  object", response.message);
        });
        this.router.navigate(['dashboard']);
    }
};
EditUsersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditUsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-users',
        template: __webpack_require__(/*! raw-loader!./edit-users.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/edit-users/edit-users.component.html"),
        styles: [__webpack_require__(/*! ./edit-users.component.css */ "./src/app/components/edit-users/edit-users.component.css")]
    })
], EditUsersComponent);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





let HeaderComponent = class HeaderComponent {
    constructor(route, activatedRoute, auth, userservice) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
        this.userservice = userservice;
        this.userIsAuthenticated = false;
        this.profileisSet = false;
        this.users = [];
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userservice.getUser(this.id).subscribe((response) => { this.user = response.user; });
        this.userIsAuthenticated = this.auth.getIsAuth();
        console.log('here auth', this.userIsAuthenticated);
        this.authListenerSubs = this.auth.getAuthStatusListener().subscribe(isAuthenticated => {
            this.userIsAuthenticated = isAuthenticated;
        });
        this.clientIsAuthenticated = this.auth.getIsAuthClient();
        console.log('here auth client', this.clientIsAuthenticated);
        this.authClient = this.auth.getAuthClient().subscribe(isClent => {
            this.clientIsAuthenticated = isClent;
        });
        this.adminIsAuthenticated = this.auth.getIsAuthAdmin();
        console.log('here auth admin ', this.adminIsAuthenticated);
        this.authAdmin = this.auth.getAuthAdmin().subscribe(isAdmin => {
            this.adminIsAuthenticated = isAdmin;
        });
        this.userservice.getallusers().subscribe((response) => { this.users = response.users; });
    }
    ngOnDestroy() {
        this.authListenerSubs.unsubscribe();
        this.authClient.unsubscribe();
        this.authStore.unsubscribe();
        this.authAdmin.unsubscribe();
        this.role = localStorage.getItem("role");
    }
    onLogout() {
        this.auth.logout();
        this.role = localStorage.getItem("role");
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.matches = [{ id: 1, scoreone: 1, scoretwo: 2, teamone: "Realmadrid", teamtwo: "barcelona" },
            { id: 2, scoreone: 4, scoretwo: 2, teamone: "psg", teamtwo: "Man city" },
            { id: 3, scoreone: 3, scoretwo: 0, teamone: "Manu", teamtwo: "barcelona" },
            { id: 4, scoreone: 0, scoretwo: 2, teamone: "chelsea", teamtwo: "Realmadrid" }, { id: 4, scoreone: 0, scoretwo: 0, teamone: "monaco", teamtwo: "nice" }];
    }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/item-match/item-match.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/item-match/item-match.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".win {\r\n    color: green;\r\n    font-size: 50px;\r\n\r\n}\r\n\r\n.loss {\r\n    color: red;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.draw {\r\n    color: blue;\r\n    font-size: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pdGVtLW1hdGNoL2l0ZW0tbWF0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXRlbS1tYXRjaC9pdGVtLW1hdGNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbn1cclxuXHJcbi5sb3NzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG59XHJcblxyXG4uZHJhdyB7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/item-match/item-match.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/item-match/item-match.component.ts ***!
  \***************************************************************/
/*! exports provided: ItemMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMatchComponent", function() { return ItemMatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ItemMatchComponent = class ItemMatchComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ItemMatchComponent.prototype, "searchMatch", void 0);
ItemMatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-match',
        template: __webpack_require__(/*! raw-loader!./item-match.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/item-match/item-match.component.html"),
        styles: [__webpack_require__(/*! ./item-match.component.css */ "./src/app/components/item-match/item-match.component.css")]
    })
], ItemMatchComponent);



/***/ }),

/***/ "./src/app/components/loader/loader.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/loader/loader.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader {\r\n    border: 16px solid #f3f3f3;\r\n    /* Light grey */\r\n    border-top: 16px solid #3498db;\r\n    /* Blue */\r\n    border-radius: 50%;\r\n    width: 100px;\r\n    height: 100px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    text-align: center;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n@keyframes spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n    }\r\n\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7SUFDN0I7QUFDSjs7QUFSQTtJQUNJO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgLyogTGlnaHQgZ3JleSAqL1xyXG4gICAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgLyogQmx1ZSAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loader',
        template: __webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loader/loader.component.html"),
        styles: [__webpack_require__(/*! ./loader.component.css */ "./src/app/components/loader/loader.component.css")]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, auth, router, UsersService) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.UsersService = UsersService;
        this.user = {};
        this.users = [];
    }
    ngOnInit() {
    }
    connection() {
        this.auth.login(this.user.email, this.user.pwd).subscribe((response) => {
            console.log("user", response);
            if (!response) {
                this.errorMsg = "Login failed. Check the user name and password.";
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/logintest/logintest.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/logintest/logintest.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW50ZXN0L2xvZ2ludGVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/logintest/logintest.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/logintest/logintest.component.ts ***!
  \*************************************************************/
/*! exports provided: LogintestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogintestComponent", function() { return LogintestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogintestComponent = class LogintestComponent {
    constructor() {
        this.user = {};
    }
    ngOnInit() {
    }
    login() {
        console.log("here user object", this.user);
    }
};
LogintestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logintest',
        template: __webpack_require__(/*! raw-loader!./logintest.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/logintest/logintest.component.html"),
        styles: [__webpack_require__(/*! ./logintest.component.css */ "./src/app/components/logintest/logintest.component.css")]
    })
], LogintestComponent);



/***/ }),

/***/ "./src/app/components/match/match.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/match/match.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0Y2gvbWF0Y2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/match/match.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/match/match.component.ts ***!
  \*****************************************************/
/*! exports provided: MatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchComponent", function() { return MatchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MatchComponent = class MatchComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MatchComponent.prototype, "x", void 0);
MatchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-match',
        template: __webpack_require__(/*! raw-loader!./match.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/match/match.component.html"),
        styles: [__webpack_require__(/*! ./match.component.css */ "./src/app/components/match/match.component.css")]
    })
], MatchComponent);



/***/ }),

/***/ "./src/app/components/matchestable/matchestable.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/matchestable/matchestable.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0Y2hlc3RhYmxlL21hdGNoZXN0YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/matchestable/matchestable.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/matchestable/matchestable.component.ts ***!
  \*******************************************************************/
/*! exports provided: MatchestableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchestableComponent", function() { return MatchestableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");




let MatchestableComponent = class MatchestableComponent {
    // currentPage = 1;
    constructor(router, matchService) {
        this.router = router;
        this.matchService = matchService;
        // items = [];
        this.T = [];
    }
    ngOnInit() {
        this.T = Array(10).fill(0).map((x, i) => ({ id: (i + 1), name: `item ${i + 1}` }));
        this.matchService.getALLMatches().subscribe((response) => {
            this.T = response;
        });
    }
    gotoDisplay(id) {
        this.router.navigate([`displyMatch/${id}`]);
    }
    gotoEdit(id) {
        this.router.navigate([`editMAtch/${id}`]);
    }
    deleteMatch(id) {
        this.matchService.deleteMatch(id).subscribe((response) => {
            console.log("here reponse after delete match", response.message);
            this.matchService.getALLMatches().subscribe((response) => {
                this.T = response;
            });
        });
    }
    colorMatch(a, b) {
        if (a > b) {
            return ("green");
        }
        else if (a < b) {
            return ("blue");
        }
        else {
            return ("red");
        }
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
};
MatchestableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"] }
];
MatchestableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-matchestable',
        template: __webpack_require__(/*! raw-loader!./matchestable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/matchestable/matchestable.component.html"),
        styles: [__webpack_require__(/*! ./matchestable.component.css */ "./src/app/components/matchestable/matchestable.component.css")]
    })
], MatchestableComponent);



/***/ }),

/***/ "./src/app/components/mathchs/mathchs.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/mathchs/mathchs.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWF0aGNocy9tYXRoY2hzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/mathchs/mathchs.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/mathchs/mathchs.component.ts ***!
  \*********************************************************/
/*! exports provided: MathchsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathchsComponent", function() { return MathchsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");



let MathchsComponent = class MathchsComponent {
    constructor(matcheServices) {
        this.matcheServices = matcheServices;
        this.matches = [];
    }
    ngOnInit() {
        this.matcheServices.getALLMatches().subscribe((response) => {
            console.log("hre reponse ", response);
            this.matches = response;
        });
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
};
MathchsComponent.ctorParameters = () => [
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"] }
];
MathchsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mathchs',
        template: __webpack_require__(/*! raw-loader!./mathchs.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mathchs/mathchs.component.html"),
        styles: [__webpack_require__(/*! ./mathchs.component.css */ "./src/app/components/mathchs/mathchs.component.css")]
    })
], MathchsComponent);



/***/ }),

/***/ "./src/app/components/mymatches/mymatches.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/mymatches/mymatches.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXltYXRjaGVzL215bWF0Y2hlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/mymatches/mymatches.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/mymatches/mymatches.component.ts ***!
  \*************************************************************/
/*! exports provided: MymatchesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MymatchesComponent", function() { return MymatchesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");



let MymatchesComponent = class MymatchesComponent {
    constructor(matcheServices) {
        this.matcheServices = matcheServices;
        this.matches = [];
    }
    ngOnInit() {
        this.matcheServices.getALLMatches().subscribe((response) => {
            console.log("hre reponse ", response);
            this.matches = response;
        });
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
};
MymatchesComponent.ctorParameters = () => [
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"] }
];
MymatchesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mymatches',
        template: __webpack_require__(/*! raw-loader!./mymatches.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/mymatches/mymatches.component.html"),
        styles: [__webpack_require__(/*! ./mymatches.component.css */ "./src/app/components/mymatches/mymatches.component.css")]
    })
], MymatchesComponent);



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");




let NewsComponent = class NewsComponent {
    constructor(router, playersServices) {
        this.router = router;
        this.playersServices = playersServices;
        this.T = [];
    }
    ngOnInit() {
        this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response; });
    }
};
NewsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] }
];
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/components/player-info/player-info.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/player-info/player-info.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyLWluZm8vcGxheWVyLWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/player-info/player-info.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/player-info/player-info.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayerInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInfoComponent", function() { return PlayerInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlayerInfoComponent = class PlayerInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlayerInfoComponent.prototype, "f", void 0);
PlayerInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player-info',
        template: __webpack_require__(/*! raw-loader!./player-info.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/player-info/player-info.component.html"),
        styles: [__webpack_require__(/*! ./player-info.component.css */ "./src/app/components/player-info/player-info.component.css")]
    })
], PlayerInfoComponent);



/***/ }),

/***/ "./src/app/components/players/players.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/players/players.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVycy9wbGF5ZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/players/players.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/players/players.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");



let PlayersComponent = class PlayersComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.T = [];
    }
    ngOnInit() {
        this.playerService.displayAllPlayers().subscribe((response) => {
            console.log("hre reponse ", response);
            this.T = response;
        });
    }
};
PlayersComponent.ctorParameters = () => [
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"] }
];
PlayersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-players',
        template: __webpack_require__(/*! raw-loader!./players.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/players/players.component.html"),
        styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/components/players/players.component.css")]
    })
], PlayersComponent);



/***/ }),

/***/ "./src/app/components/playertable/playertable.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/playertable/playertable.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVydGFibGUvcGxheWVydGFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/playertable/playertable.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/playertable/playertable.component.ts ***!
  \*****************************************************************/
/*! exports provided: PlayertableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayertableComponent", function() { return PlayertableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/players.service */ "./src/app/services/players.service.ts");




let PlayertableComponent = class PlayertableComponent {
    constructor(router, playersServices) {
        this.router = router;
        this.playersServices = playersServices;
        this.T = [];
    }
    ngOnInit() {
        this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response; });
    }
    gotoDisplay(id) {
        this.router.navigate([`displayplayer/${id}`]);
    }
    gotoEdit(id) {
        this.router.navigate([`editplayers/${id}`]);
    }
    Delete(id) {
        this.playersServices.deletePlayer(id).subscribe((response) => {
            console.log("here your object is deleted", response);
            this.playersServices.displayAllPlayers().subscribe((response) => { this.T = response; });
        });
    }
};
PlayertableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"] }
];
PlayertableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playertable',
        template: __webpack_require__(/*! raw-loader!./playertable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/playertable/playertable.component.html"),
        styles: [__webpack_require__(/*! ./playertable.component.css */ "./src/app/components/playertable/playertable.component.css")]
    })
], PlayertableComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(activatedRoute, userServices, route) {
        this.activatedRoute = activatedRoute;
        this.userServices = userServices;
        this.route = route;
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.userServices.getUser(this.id).subscribe((response) => { this.user = response.user; });
    }
    editUser(id) {
        this.route.navigate([`editProfile/${id}`]);
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/ranking/ranking.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFua2luZy9yYW5raW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/ranking/ranking.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ranking/ranking.component.ts ***!
  \*********************************************************/
/*! exports provided: RankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankingComponent", function() { return RankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RankingComponent = class RankingComponent {
    constructor() { }
    ngOnInit() {
    }
};
RankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ranking',
        template: __webpack_require__(/*! raw-loader!./ranking.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/ranking/ranking.component.html"),
        styles: [__webpack_require__(/*! ./ranking.component.css */ "./src/app/components/ranking/ranking.component.css")]
    })
], RankingComponent);



/***/ }),

/***/ "./src/app/components/scores/scores.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/scores/scores.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".win {\r\n    color: green;\r\n    font-size: 50px;\r\n\r\n}\r\n\r\n.loss {\r\n    color: red;\r\n    font-size: 20px;\r\n\r\n}\r\n\r\n.draw {\r\n    color: blue;\r\n    font-size: 30px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY29yZXMvc2NvcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Njb3Jlcy9zY29yZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW4ge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG5cclxufVxyXG5cclxuLmxvc3Mge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbn1cclxuXHJcbi5kcmF3IHtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/scores/scores.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/scores/scores.component.ts ***!
  \*******************************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScoresComponent = class ScoresComponent {
    constructor() { }
    ngOnInit() {
    }
    score(a, b) {
        if (a > b) {
            return ("win");
        }
        else if (a < b) {
            return ("loss");
        }
        else {
            return ("draw");
        }
    }
    color(a, b) {
        if (a > b) {
            return ("green");
        }
        else if (a < b) {
            return ("orange");
        }
        else {
            return ("blue");
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ScoresComponent.prototype, "matchestable", void 0);
ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-scores',
        template: __webpack_require__(/*! raw-loader!./scores.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/scores/scores.component.html"),
        styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/components/scores/scores.component.css")]
    })
], ScoresComponent);



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/match.service */ "./src/app/services/match.service.ts");




let SearchComponent = class SearchComponent {
    constructor(formbuilder, matchServices) {
        this.formbuilder = formbuilder;
        this.matchServices = matchServices;
    }
    ngOnInit() {
        this.searchForm = this.formbuilder.group({
            scoreone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            scoretwo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    Search() {
        console.log("search the match ", this.searchForm.value);
        this.matchServices.searchMatches(this.searchForm.value).subscribe((response) => { this.T = response.matches; });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_match_service__WEBPACK_IMPORTED_MODULE_3__["MatchService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");





let SignupComponent = class SignupComponent {
    constructor(formBuilder, userService, router) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        this.path = this.router.url;
        console.log("here path", this.path);
        this.signupForm = this.formBuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9_-]{8,15}$")]],
            ConfirmePwd: [''],
            img: ['']
        });
    }
    signup() {
        if (this.path == "/registre") {
            this.signupForm.value.role = "client";
        }
        else {
            this.signupForm.value.role = "admin";
        }
        // console.log("her user object", this.signupForm.value);
        this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe((response) => {
            console.log("here response after signup", response);
            if (response.message == "email existe") {
                this.errorMsg = response.message;
            }
            else {
                this.router.navigate(['login']);
            }
        });
    }
    onImageSelected(event) {
        const file = event.target.files[0];
        this.signupForm.patchValue({ img: file });
        this.signupForm.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/components/stadium-table/stadium-table.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/stadium-table/stadium-table.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3RhZGl1bS10YWJsZS9zdGFkaXVtLXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/stadium-table/stadium-table.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/stadium-table/stadium-table.component.ts ***!
  \*********************************************************************/
/*! exports provided: StadiumTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StadiumTableComponent", function() { return StadiumTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/stadiumservices.service */ "./src/app/services/stadiumservices.service.ts");




let StadiumTableComponent = class StadiumTableComponent {
    constructor(router, stadiumservices) {
        this.router = router;
        this.stadiumservices = stadiumservices;
        this.T = [];
    }
    ngOnInit() {
        this.stadiumservices.displayAllStadium().subscribe((response) => {
            this.T = response;
        });
    }
    deleteStadiumObj(id) {
        this.stadiumservices.deleteStadium(id).subscribe((response) => {
            console.log("here reponse after delete stadium", response);
            this.stadiumservices.displayAllStadium().subscribe((response) => {
                this.T = response;
            });
        });
    }
    gotoEdit(id) {
        this.router.navigate([`editStadium/${id}`]);
    }
};
StadiumTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_stadiumservices_service__WEBPACK_IMPORTED_MODULE_3__["StadiumservicesService"] }
];
StadiumTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stadium-table',
        template: __webpack_require__(/*! raw-loader!./stadium-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/stadium-table/stadium-table.component.html"),
        styles: [__webpack_require__(/*! ./stadium-table.component.css */ "./src/app/components/stadium-table/stadium-table.component.css")]
    })
], StadiumTableComponent);



/***/ }),

/***/ "./src/app/components/team-sapi/team-sapi.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/team-sapi/team-sapi.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS1zYXBpL3RlYW0tc2FwaS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/team-sapi/team-sapi.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/team-sapi/team-sapi.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamSapiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamSapiComponent", function() { return TeamSapiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_teams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api-teams.service */ "./src/app/services/api-teams.service.ts");



let TeamSapiComponent = class TeamSapiComponent {
    constructor(apiServices) {
        this.apiServices = apiServices;
    }
    ngOnInit() {
        this.apiServices.getALLteamsApi().subscribe((response) => {
            console.log("here into from Api", response.teamsapi);
            this.T = response.teamsapi;
        });
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
};
TeamSapiComponent.ctorParameters = () => [
    { type: src_app_services_api_teams_service__WEBPACK_IMPORTED_MODULE_2__["ApiTeamsService"] }
];
TeamSapiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-sapi',
        template: __webpack_require__(/*! raw-loader!./team-sapi.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/team-sapi/team-sapi.component.html"),
        styles: [__webpack_require__(/*! ./team-sapi.component.css */ "./src/app/components/team-sapi/team-sapi.component.css")]
    })
], TeamSapiComponent);



/***/ }),

/***/ "./src/app/components/teamtable/teamtable.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/teamtable/teamtable.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbXRhYmxlL3RlYW10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/teamtable/teamtable.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/teamtable/teamtable.component.ts ***!
  \*************************************************************/
/*! exports provided: TeamtableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamtableComponent", function() { return TeamtableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/teams.service */ "./src/app/services/teams.service.ts");




let TeamtableComponent = class TeamtableComponent {
    constructor(router, teamsService) {
        this.router = router;
        this.teamsService = teamsService;
        this.T = [];
    }
    ngOnInit() {
        this.teamsService.displayAllTeams().subscribe((response) => { this.T = response; });
    }
    gotoDisplay(id) {
        this.router.navigate([`displyTeams/${id}`]);
    }
    gotoEdit(id) {
        this.router.navigate([`editTeams/${id}`]);
    }
    delete(id) {
        this.teamsService.deleteTeamsById(id).subscribe((response) => {
            console.log("delete team", response);
            this.teamsService.displayAllTeams().subscribe((response) => {
                console.log(response);
                this.T = response;
            });
        });
    }
};
TeamtableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_teams_service__WEBPACK_IMPORTED_MODULE_3__["TeamsService"] }
];
TeamtableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teamtable',
        template: __webpack_require__(/*! raw-loader!./teamtable.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/teamtable/teamtable.component.html"),
        styles: [__webpack_require__(/*! ./teamtable.component.css */ "./src/app/components/teamtable/teamtable.component.css")]
    })
], TeamtableComponent);



/***/ }),

/***/ "./src/app/components/test/test.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/test/test.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/test/test.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/test/test.component.ts ***!
  \***************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_test_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/test.service */ "./src/app/services/test.service.ts");




let TestComponent = class TestComponent {
    constructor(formbuilder, testServices) {
        this.formbuilder = formbuilder;
        this.testServices = testServices;
        this.T = [];
    }
    ngOnInit() {
        this.testForm = this.formbuilder.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        // this.testServices.getALLCoaches().subscribe((response) => {
        //   console.log("here response coaches", response.coaches);
        //   this.T = response.coaches;
        // });
    }
    signup() {
        this.testServices.addcoache(this.testForm.value).subscribe((response) => {
            console.log("here into response", response.message);
            this.testServices.getALLCoaches().subscribe((response) => {
                console.log("here response coaches", response.coaches);
                this.T = response.coaches;
            });
        });
    }
};
TestComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_test_service__WEBPACK_IMPORTED_MODULE_3__["TestService"] }
];
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: __webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/test/test.component.html"),
        styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/components/test/test.component.css")]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/components/useres-table/useres-table.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/useres-table/useres-table.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlcmVzLXRhYmxlL3VzZXJlcy10YWJsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/useres-table/useres-table.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/useres-table/useres-table.component.ts ***!
  \*******************************************************************/
/*! exports provided: UseresTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UseresTableComponent", function() { return UseresTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/users.service */ "./src/app/services/users.service.ts");




let UseresTableComponent = class UseresTableComponent {
    constructor(usersService, route) {
        this.usersService = usersService;
        this.route = route;
        this.users = [];
    }
    ngOnInit() {
        this.usersService.getallusers().subscribe((response) => { this.users = response; });
    }
    gotoDisplay(id) {
        this.route.navigate([`profile/${id}`]);
    }
    gotoEdit(id) {
        this.route.navigate([`editProfile/${id}`]);
    }
    deleteUser(id) {
        this.usersService.deleteUser(id).subscribe((response) => {
            console.log("here reponse after delete match", response);
            this.usersService.getallusers().subscribe((response) => {
                this.users = response;
            });
        });
    }
};
UseresTableComponent.ctorParameters = () => [
    { type: src_app_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UseresTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-useres-table',
        template: __webpack_require__(/*! raw-loader!./useres-table.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/useres-table/useres-table.component.html"),
        styles: [__webpack_require__(/*! ./useres-table.component.css */ "./src/app/components/useres-table/useres-table.component.css")]
    })
], UseresTableComponent);



/***/ }),

/***/ "./src/app/data-services.service.ts":
/*!******************************************!*\
  !*** ./src/app/data-services.service.ts ***!
  \******************************************/
/*! exports provided: DataServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServicesService", function() { return DataServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DataServicesService = class DataServicesService {
    constructor(http) {
        this.http = http;
        this.dataUrl = "http://localhost:3000/data";
    }
    getAllData() {
        return this.http.get(this.dataUrl);
    }
};
DataServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DataServicesService);



/***/ }),

/***/ "./src/app/pipes/asterix.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/asterix.pipe.ts ***!
  \***************************************/
/*! exports provided: AsterixPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsterixPipe", function() { return AsterixPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AsterixPipe = class AsterixPipe {
    constructor() {
        this.T = ["a", "e", "i", "o", "u", "y"];
    }
    transform(ch) {
        this.T = ["a", "e", "i", "o", "u", "y"];
        let resu = "";
        for (let i = 0; i < ch.length; i++) {
            let x = ch[i];
            for (let j = 0; j < this.T.length; j++) {
                if (ch[i].toLowerCase() == this.T[j]) {
                    x = "*";
                    break;
                }
            }
            resu = resu + x;
        }
        return (resu);
    }
};
AsterixPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'asterix'
    })
], AsterixPipe);



/***/ }),

/***/ "./src/app/pipes/my-filtre.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/my-filtre.pipe.ts ***!
  \*****************************************/
/*! exports provided: MyFiltrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFiltrePipe", function() { return MyFiltrePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MyFiltrePipe = class MyFiltrePipe {
    transform(objs, term) {
        if (term === undefined) {
            return objs;
        }
        return objs.filter((obj) => {
            return (obj.teamone.toLowerCase().includes(term.toLowerCase())
                || obj.teamtwo.toLowerCase().includes(term.toLowerCase()));
        });
    }
};
MyFiltrePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'myFiltre'
    })
], MyFiltrePipe);



/***/ }),

/***/ "./src/app/pipes/reverse.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/reverse.pipe.ts ***!
  \***************************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReversePipe = class ReversePipe {
    constructor() {
        this.x = "";
    }
    transform(ch) {
        for (let i = 0; i < ch.length; i++) {
            this.x = ch[i] + this.x;
        }
        return (this.x);
    }
};
ReversePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'reverse'
    })
], ReversePipe);



/***/ }),

/***/ "./src/app/services/api-teams.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/api-teams.service.ts ***!
  \***********************************************/
/*! exports provided: ApiTeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiTeamsService", function() { return ApiTeamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiTeamsService = class ApiTeamsService {
    constructor(http) {
        this.http = http;
        this.apiTeamsURl = "http://localhost:3000/apiTeams";
    }
    getALLteamsApi() {
        // return this.http.get(this.matchURl);
        return this.http.get(this.apiTeamsURl);
    }
};
ApiTeamsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiTeamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiTeamsService);



/***/ }),

/***/ "./src/app/services/match.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/match.service.ts ***!
  \*******************************************/
/*! exports provided: MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MatchService = class MatchService {
    // HttpClient :module d envoie de req=request 
    constructor(http) {
        this.http = http;
        //  Adresse du serveur BE 
        this.matchURl = "http://localhost:3000/matches";
    }
    addMatch(obj) {
        return this.http.post(this.matchURl, obj);
    }
    editMatch(obj) {
        return this.http.put(`${this.matchURl}/${obj.id}`, obj);
    }
    displayMatch(id) {
        return this.http.get(`${this.matchURl}/${id}`);
    }
    deleteMatch(id) {
        return this.http.delete(`${this.matchURl}/${id}`);
    }
    getALLMatches() {
        // return this.http.get(this.matchURl);
        return this.http.get(this.matchURl);
    }
    searchMatches(obj) {
        return this.http.post(`${this.matchURl}/search`, obj);
    }
};
MatchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MatchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MatchService);



/***/ }),

/***/ "./src/app/services/players.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/players.service.ts ***!
  \*********************************************/
/*! exports provided: PlayersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersService", function() { return PlayersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PlayersService = class PlayersService {
    constructor(http) {
        this.http = http;
        this.playersUrl = " http://localhost:3000/players";
    }
    addPlayer(player, img) {
        let formData = new FormData();
        formData.append("img", img);
        formData.append("name", player.name);
        formData.append("numero", player.numero);
        formData.append("position", player.position);
        formData.append("team", player.team);
        formData.append("age", player.age);
        return this.http.post(this.playersUrl, formData);
    }
    editPlayer(obj) {
        return this.http.put(`${this.playersUrl}/${obj.id}`, obj);
    }
    displayPlayer(id) {
        return this.http.get(`${this.playersUrl}/${id}`);
    }
    deletePlayer(id) {
        return this.http.delete(`${this.playersUrl}/${id}`);
    }
    displayAllPlayers() {
        return this.http.get(this.playersUrl);
    }
};
PlayersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlayersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlayersService);



/***/ }),

/***/ "./src/app/services/stadiumservices.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/stadiumservices.service.ts ***!
  \*****************************************************/
/*! exports provided: StadiumservicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StadiumservicesService", function() { return StadiumservicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let StadiumservicesService = class StadiumservicesService {
    constructor(http) {
        this.http = http;
        this.stadiumUrl = "http://localhost:3000/stadium";
    }
    addStadium(obj) {
        return this.http.post(this.stadiumUrl, obj);
    }
    displayAllStadium() {
        return this.http.get(this.stadiumUrl);
    }
    deleteStadium(id) {
        return this.http.delete(`${this.stadiumUrl}/${id}`);
    }
    getStadiumById(id) {
        return this.http.get(`${this.stadiumUrl}/${id}`);
    }
    editStadium(obj) {
        return this.http.put(this.stadiumUrl, obj);
    }
};
StadiumservicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
StadiumservicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], StadiumservicesService);



/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TeamsService = class TeamsService {
    constructor(http) {
        this.http = http;
        this.teamUrl = "http://localhost:3000/teams";
    }
    addTeams(obj) {
        return this.http.post(this.teamUrl, obj);
    }
    deleteTeamsById(id) {
        return this.http.delete(`${this.teamUrl}/${id}`);
    }
    displayTeamById(id) {
        return this.http.get(`${this.teamUrl}/${id}`);
    }
    displayAllTeams() {
        return this.http.get(this.teamUrl);
    }
    editTeams(obj) {
        return this.http.put(`${this.teamUrl}/${obj.id}`, obj);
    }
};
TeamsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TeamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TeamsService);



/***/ }),

/***/ "./src/app/services/test.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/test.service.ts ***!
  \******************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.coacheURl = "http://localhost:3000/coaches";
    }
    addcoache(obj) {
        return this.http.post(this.coacheURl, obj);
    }
    getALLCoaches() {
        // return this.http.get(this.matchURl);
        return this.http.get(this.coacheURl);
    }
};
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TestService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.usersURl = "http://localhost:3000/users";
    }
    getallusers() {
        return this.http.get(this.usersURl);
    }
    editUser(user) {
        return this.http.put(`${this.usersURl}/${user.id}`, user);
    }
    deleteUser(id) {
        return this.http.delete(`${this.usersURl}/${id}`);
    }
    signup(user, img) {
        let formData = new FormData();
        formData.append("img", img);
        formData.append("firstName", user.firstName);
        formData.append("lastName", user.lastName);
        formData.append("email", user.email);
        formData.append("pwd", user.pwd);
        formData.append("role", user.role);
        return this.http.post(`${this.usersURl}/signup`, formData);
    }
    getUser(id) {
        return this.http.get(`${this.usersURl}/${id}`);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.weatherURl = "http://localhost:3000/weather";
    }
    searchWether(obj) {
        return this.http.post(this.weatherURl, obj);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/services/weather.service.ts");




let WeatherComponent = class WeatherComponent {
    constructor(formBuilder, weatherServices) {
        this.formBuilder = formBuilder;
        this.weatherServices = weatherServices;
    }
    ngOnInit() {
        this.weatherForm = this.formBuilder.group({
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    serach() {
        console.log("search", this.weatherForm.value.country);
        this.weatherServices.searchWether(this.weatherForm.value).subscribe((response) => {
            console.log("here into response", response.result);
            this.resultData = response.result;
            this.iconUrl = "http://openweathermap.org/img/w/" + this.resultData.icone + ".png";
        });
    }
};
WeatherComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
];
WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/index.js!./src/app/weather/weather.component.html"),
        styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
    })
], WeatherComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\slimn\OneDrive\Bureau\AngularJuillet22\sport\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map