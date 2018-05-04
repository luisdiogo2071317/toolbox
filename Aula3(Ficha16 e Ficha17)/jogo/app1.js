new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function () {
            var max = 10;
            var min = 3;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            var damage1 = Math.max(Math.floor(Math.random() * max) + 1, min)
            this.monsterHealth -= damage1;
            this.playerHealth -= damage;        
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                alert('Draw!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                alert('Error');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }            
        },
        specialAttack: function () {
            alert('Special Attack!');
            var max = 20;
            var min = 10;
            var damage = Math.max(Math.floor(Math.random() * max) + 1, min)
            var damage1 = Math.max(Math.floor(Math.random() * max) + 1, min)            
            this.monsterHealth -= damage;
            this.playerHealth -= damage1;
            this.damage1 = max = 10, min = 3;
            if (this.monsterHealth <= 0) {
                alert('You won!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
            if (this.playerHealth <= 0) {
                alert('You lost!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                alert('Draw!');
                this.gameIsRunning = false;
                this.monsterHealth = 100;
                this.playerHealth = 100;
                return;
            }
        },
        heal: function () {
            alert('You healed!');
            this.playerHealth = 100;
            this.playerHealth -= damage1;
            this.gameIsRunning = true;
            return;
        },
        giveUp: function () {
            alert('You gave up!Both will heal automatically!');
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            return;
        }
    }
});