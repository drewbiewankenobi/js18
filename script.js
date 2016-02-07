angular.module("myApp", []);

angular.module("myApp").factory("quoteFactory", [function(){
			var Quote = function(author,text,stars){
					this.author = author;
					this.text = text;
					this.stars = stars || 1;
			}

			var quoteBox = []


			return {
				QuoteConstructor : Quote,
				quoteBox : quoteBox,
			}
}])


angular.module("myApp").controller("bodyMaster", ["$scope", "quoteFactory", function($scope, quoteFactory){
			
			var s = $scope
			var Quote = quoteFactory.QuoteConstructor
			s.quoteBox = quoteFactory.quoteBox
			s.hideMe = true
			s.rando = 0
			s.myQuote = new Quote("R.A. Salvatore","Are you more trapped by the way the world sees you, or by the way you see the world seeing you?")
			s.quote1 = new Quote("Spoon Boy", "Do not try and bend the spoon, that's impossible. Instead, only try to realize the truth...there is no spoon.")
			s.quote2 = new Quote("McCroskey", "Looks like I picked the wrong week to stop sniffing glue.")
			s.quoteBox.push(s.myQuote, s.quote1, s.quote2)

			//functions--------->

			s.randoQuote = function(){
				s.rando = Math.floor(Math.random() * s.quoteBox.length)
			
			}

			s.revealer = function() {
				s.hideMe = !s.hideMe
				console.log("you're a clicker")
			}

			s.quoteSubmit = function(author, text) {
				if (s.author && s.text){
					var userQuote = new Quote(author, text)
					s.quoteBox.push(userQuote)
					s.hideMe = !s.hideMe
					s.author = ""
					s.text = ""
					}
				else {alert("Please try entering a quote AND an author.")}
				
			}

			s.starsCounter = function(thing){
			 if(this.thing.stars < 5){
			 this.thing.stars +=1}
			}

			s.starsDowner = function(thing){
				if(this.thing.stars >0){
			 this.thing.stars -=1}
			}
			
}])