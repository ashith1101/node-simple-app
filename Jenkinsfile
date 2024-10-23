pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from GitHub
                git 'https://github.com/ashith1101/node-simple-app.git'
            }
        }

        stage('Build') {
            steps {
                // Build the Docker image
                script {
                    def appImage = docker.build("node-simple-app:${env.BUILD_ID}")
                }
            }
        }

        stage('Test') {
            steps {
                // Run tests (if you have any)
                echo 'Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                // You can deploy your app here, for example using Docker run
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
