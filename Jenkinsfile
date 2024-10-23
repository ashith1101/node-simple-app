pipeline {
    agent any

    environment {
        SHELL = '/bin/sh' // Or the path where sh is installed on your system
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/ashith1101/node-simple-app.git'
            }
        }

        stage('Build') {
            steps {
                script {
                    def appImage = docker.build("node-simple-app:${env.BUILD_ID}")
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    docker.image("node-simple-app:${env.BUILD_ID}").run('-p 3000:3000')
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
