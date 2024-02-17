# Use the official PostgreSQL image from Docker Hub
FROM postgres:latest

# Set environment variables - Just for the proof of concept and local development
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=supersecretpassword
ENV POSTGRES_DB=bookingdb

# Copy the schema SQL file to the Docker container
COPY init.sql /docker-entrypoint-initdb.d/

# Expose PostgreSQL port
EXPOSE 5432
