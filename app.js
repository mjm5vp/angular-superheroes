superhero_data = [
  {name: "Batman", phoneNumber: "Batsignal", comicsAffiliation: "DC", img_url: "https://mi-od-live-s.legocdn.com/r/www/r/catalogs/-/media/catalogs/characters/lbm%20characters/primary/70900_1to1_batman_360_480.png?l.r2=1668006940"},
  {name: "Spiderman", phoneNumber: "World Wide Web", comicsAffiliation: "Marvel", img_url: "https://i.ytimg.com/vi/PX8MOSAkLsI/sddefault.jpg"},
  {name: "Deadpool", phoneNumber: "TBD", comicsAffiliation: "Marvel", img_url: "http://cdn.collider.com/wp-content/uploads/2017/01/deadpool-hugh-jackman.jpg"},
  {name: "Superman", phoneNumber: "Super Hearing", comicsAffiliation: "DC", img_url: "https://76.my/Malaysia/lego-76040-super-heroes-superman-minifigure-legoland-1502-07-Legoland@15.jpg"}
]

angular
  .module("superheroApp",[])
  .controller("superheroController",[
    SuperheroControllerFunction
  ])

function SuperheroControllerFunction(){
  this.superheroes = superhero_data
  this.buttonText = "Show Hero"

  this.addHero = function(){
    let hero = {name: this.heroName, phoneNumber: this.heroPhoneNumber, comicsAffiliation: this.heroComicsAffiliation, img_url: this.img_url}
    this.superheroes.push(hero)
  }

  this.editHero = function(i){
    this.superheroes[i].name = this.editHeroName
    this.superheroes[i].phoneNumber = this.editHeroPhoneNumber
    this.superheroes[i].comicsAffiliation = this.editHeroComicsAffliation
    this.superheroes[i].img_url = this.edit_img_url
  }

}
