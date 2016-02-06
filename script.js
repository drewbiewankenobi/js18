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
			s.myQuote = new Quote("","I like pie.")
			s.quoteBox.push(s.myQuote)

			s.revealer = function() {
				s.hideMe = !s.hideMe
				console.log("you're a clicker")
			}

			s.quoteSubmit = function(author, text) {
				console.log(s.author, s.text)
				if (s.author && s.text){
					var userQuote = new Quote(author, text)
					s.quoteBox.push(userQuote)
					console.log(userQuote)
					s.hideMe = !s.hideMe
					s.author = ""
					s.text = ""
					}
				else {alert("Please try entering a quote AND an author.")}
				
			}

			s.starsCounter = function(thing){
				s.quoteBox.stars = thing.stars + 1
			}
			
}])