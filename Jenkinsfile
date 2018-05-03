pipeline {
    agent {
        docker {
            image 'node:8.1.1' 
            args '-p 5667:5667' 
        }
    }

    environment {
        CI = 'true'
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

    }
}
