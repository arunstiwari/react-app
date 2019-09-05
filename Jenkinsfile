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
	                 withSonarQubeEnv('sonarscanner') {
			    sh '${scannerHome}/bin/sonar-scanner -Dsonar.host.url=http://54.72.251.138:9000 -Dsonar.projectKey=react-redux -Dsonar.sources=src'
			 }
			 timeout(time: 10, unit: 'MINUTES') {
                             waitForQualityGate abortPipeline: true
                         }   
                    }
		   
                }
		stage('Build Docker Image'){
		    steps {
                        sh 'sudo docker build -t react-demo:1.0 .'
                    }
                }
	  }
}
