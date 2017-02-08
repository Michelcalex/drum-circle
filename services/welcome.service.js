module.exports = {
    name: 'WelcomeService',
    func: function ($http) {
        return {
            showForm() {
                console.log('show form now');
            }
        }
    }
}