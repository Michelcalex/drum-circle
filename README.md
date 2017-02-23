# Drum-circle

Drum Circle is an open source library of drum samples where users can browse through our database,
choose their favorite sounds, and play them by building their own customized drumkits. It provides
an accessible and tactile way to discover and play new sounds. Drum Circle is responsive to fit
mobile, tablet, and laptop allowing users access from multiple platforms.

# Demo
Demo can be found at https://drumcircle1.herokuapp.com/
 
 
# Dependencies
 <ul>
 <li>Heroku</li>
 <li>Postgres</li>
 <li>Gulp</li>
 </ul>
 
# Install
1. Install Postgres. The best way to do this on OSX is to find Postgres.app and install it. 
2. Create database named drum circle 
 1. Run psql in terminal <code>psql</code>
 2. Create and name the database <code>CREATE DATABASE drumcircle;</code>
3. Clone project 
4. Npm install inside project directory
 1. <code>npm install </code>
5. Create 'Procfile.local' file in project repository
 1. Place the following code in your file: <code>web: ./gradlew bootRun</code>
6. Create '.env' file in the root of your project repository. NOTE: this file should <em>not</em> be in source control. The contents of this file will give heroku local environment variables to use. 
 1. <code>JDBC_DATABASE_URL=jdbc:postgresql://localhost:5432/testdatabase</code>
7. To start server locally, run the heroku command
 1. <code>heroku local web -f Procfile.local</code>
 

 
 
# Quick Start
 <ul>
  <li>Browse through our library and sample different sounds.</li>
  <li>When your ready to save your favorites, make sure to log in!</li>
  <li>You can easily sign up or log in on the 'Home' page.</li>
  <li>Once you find a sound you love, click on the heart icon to save that sound to your favorites.</li>
  <li>After, head on over to the 'Kit' page to begin playing.</li>
  <li>Drag and drop sounds from your favorite list onto the pads and you are ready to play.</li>
  <li>Want to start over? Just hit the trash button and rebuild your kit</li>
 </ul>
 
 
# Authors 
 <p><em>Lexi Michel</em></p>
 <p>Github: @Michelcalex</p>
 <br>
 <p><em>Leo Wolf</em></p>
 <p>Github: @leowolf749</p>
 <br>
 <p><em>Ben Burr</em></p>
 <p>Github: @bburrva</p>
 
# Copyright
 <p>Copyright &#9400; 2017</p>
 
