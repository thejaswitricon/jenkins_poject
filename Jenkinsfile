stage('SonarCloud') {
            environment {
                SCANNER_HOME = tool 'sonarcloud'
                PROJECT_NAME = "Your Project name"
            }
            steps {
                withSonarQubeEnv('sonarcloud') {
                    sh '''$SCANNER_HOME/bin/sonar-scanner \
                    //-Dsonar.organization=$ORGANIZATION \
                    -Dsonar.projectKey=$PROJECT_NAME \
                    -Dsonar.projectName=$PROJECT_NAME '''
                }
            }
        }
