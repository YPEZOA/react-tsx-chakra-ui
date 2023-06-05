FROM sonarqube:9.9.1-community
COPY sonar.properties /opt/sonarqube/conf/
EXPOSE 9090
