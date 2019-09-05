pipeline{
	agent {label 'mac'}
  tools { nodejs 'node' }
	stages{
		stage('Install dependencies') {
			steps {
				sh 'npm install'
			}
		}
		stage('Unit Test') {
			steps {
				sh 'CI=true npm run test'
			}
		}
		stage('Test coverage') {
			steps {
				sh 'npm run coverage'
			}
			post {
				always {
					step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/cobertura-coverage.xml'])
				}
			}
		}

        stage('build && SonarQube analysis') {
			environment {
			   scannerHome = tool 'sonarscanner'
    			}
                    steps {
	                 // Optionally use a Maven environment you've configured already
			    sh '${scannerHome}/bin/sonar-scanner -Dsonar.host.url=http://54.72.251.138:9000 -Dsonar.projectKey=react-redux -Dsonar.sources=src'

                    }
        }
		stage('Build Docker Image'){
		  steps {
              sh 'docker build -t react-demo:1.0 .'
          }
        }
	  }
}
