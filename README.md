# DWP_Pangilinan

##Deployment Plan

1. Spin up Production Server
	* Single-Tier server
	* The most taxing thing the server will hold is images. Therefore the basic droplet plan should be enough. (I certainly couldn't use more than 500MB on *just* images right?)

2. Make basic static site
	* This will act more as a template/skeleton for the final portfolio

3. Figure out how to get site content onto the Production server's IP
	* Configure server for git development
	* Test with a basic page
	* Hope it works (it if doesn't then cry)

4. Push basic site to the server
	* git push prodServer

5. Setup Staging Server
	* Single-Tier Server
	* Configure for git development
	* Test with the same page from production server
	
6. Push site to Staging Server
	* git push stagingServer

###Site polishing
1. Features
	* Add image previews for each project
	* Carousel view for each project

2. Test it
3. Push site to the server

###Server IP's
* Production Server: 104.131.137.167
* Staging Server: 162.243.247.212