pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 5667:5667' 
        }
    }

    environment {
        CI = 'true'
        HOME = '.'
    }
    
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

/*
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
*/
    }
}
