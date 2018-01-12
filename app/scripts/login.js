var app = new Vue({
    el: '#app',
    data: {
        username: '',
        password: '',
        feedback: {
            username: '',
            password: ''
        }
    },
    watch: {
        username: function() {
            // shorten our username variable for readability
            var username = this.username

            // if the field is empty, clear the feedback
            if (username.length === 0) {
                this.feedback.username = ''
            }
            // if the username is less than 3 or greater than 20, error
            else if (username.length < 3 || username.length > 20) {
                this.feedback.username = "username must be between 3 and 20 characters"
            }
            // if the username is only numbers and letters
            else if (username.match("^[0-9A-z]+$")) {
                this.feedback.username = ''
            }
            // there are illegal characters
            else {
                this.feedback.username = 'username must only be digits and letters'
            }
        },
        password: function() {
            // shorten our username variable for readability
            var password = this.password

            // if the field is empty, clear the feedback
            if (password.length === 0) {
                this.feedback.password = ''
            }
            // if the password is less than 6 or greater than 25, error
            else if (password.length < 6 || password.length > 25) {
                this.feedback.password = "password must be between 6 and 25 characters"
            }
            // if the password is numbers, letters and some select special characters
            else if (password.match("^[0-9A-z@#$%*^!\-=&]+$")) {
                this.feedback.password = ''
            }
            // there are illegal characters
            else {
                this.feedback.password = 'password must only be digits and letters'
            }
        }
    }
})
