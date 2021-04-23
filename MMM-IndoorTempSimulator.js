/* global Module */

/*  Magic Mirror
    Module: MMM-IndoorTemperature
   
    David / FabLab LabHidouille by Familles Solidaires

    Created : 20-04-2021
    Revised : 21-04-2021
  
  MIT Licensed.
*/

Module.register("MMM-IndoorTempSimulator", 
{
	// Default module config.
	defaults: 
	{
		temp: 20,
	},

	start: function() 
	{
		Log.info('Starting module: ' + this.name);
		this.tempRandom = this.config.temp;
	},

	// Override dom generator.
	//getDom: function() 
	//{
	//	var DivName = document.createElement("div");
	//	DivName.className = "Indoor_Temp";
	//	DivName.innerHTML = "Temp : " + this.tempRandom + " °C";

	//	return DivName;
	//},

	// messages reçus d'autres modules et du système (PAS de votre node_helper)
	// le payload est une structure de données dépendant de la notification
    notificationReceived: function(notification,payload,sender) 
    {
		var self = this;

        switch(notification)
        {
            case "ALL_MODULES_STARTED": // notif de lancement de tous les modules
				var firstTimer = setTimeout(()=>
				{
					this.sendNotification("INDOOR_TEMPERATURE", this.tempRandom);
				}, 1*1000);	

				var timer = setInterval(()=>
				{
					this.tempRandom = Math.random()*((this.config.temp+0.5)-(this.config.temp-0.5))+(this.config.temp-0.5);
					this.sendNotification("INDOOR_TEMPERATURE", this.tempRandom); //envoi la notif à tout les modules "INDOOR_TEMPERATURE" et le paylaod "this.temp"
				}, 30*1000);
					
			break;
        }
    },

	//sendDataNotifications: function()
	//{
	//	var self = this;
	//	self.sendNotification("INDOOR_TEMPERATURE", self.config.temp);
	//},
	
});
