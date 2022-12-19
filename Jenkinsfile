pipeline{
    agent any
    stages{
        stage('Hello'){
            steps{
                echo "Checking World"
            }
        }
        stage('World'){
            steps{
                echo "Second Stage"
            }
        }
        stage('Third'){
            steps{
                echo "New Stage"
            }
        }
        stage('SonarQube analysis') {
            environment {
                scannerHome = tool 'SonarQube-9.7.1'
            }
            steps {
                withSonarQubeEnv('SonarCube-token') {
                    bat "${scannerHome}/bin/sonar-scanner"
                }
            }
        }


    }
}
