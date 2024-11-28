let youtubePlaylist = `PLZWiw-xxQ4SMitiNpd4NILYbTVU_Qa4Lj`;
let websiteurl = "https://screen.sdq.st:8443/?room=afkp"; /* ?autoplay=1&controls=0 For YouTube Live */
let otherwebsiteurl = "https://firer.at/";

BS.BanterScene.GetInstance().On("loaded", () => {
	console.log("Scene loaded");
	/* COMMENTED THIS OUT TO REMOVE THE YOUTUBE PLAYER */
		 enableYouTube();
	/* UNCOMMENTED THIS TO ENABLE SCREEN CAST / YOUTUBE LIVE */
		// enableTheFireScreen();
	/* UNCOMMENTED THIS TO ENABLE FIRE TABLET */
		// enableThePortableFireScreen()
});

// videoplayer toggle by HBR & Fire
let ytplayerdisabled = true;
  function enableYouTube() {
  if (ytplayerdisabled){ ytplayerdisabled = false;
    console.log("YouTube Player Loading");
    const videoplayer = document.createElement("script");
		videoplayer.id = "afkp-videoplayer";
		videoplayer.setAttribute("scale", "1 1 1");
		videoplayer.setAttribute("mip-maps", "0");
		videoplayer.setAttribute("rotation", "0 0 0");
		videoplayer.setAttribute("position", "0 -50 0");
		videoplayer.setAttribute("hand-controls", "false");
		videoplayer.setAttribute("button-position", "0 -51 0");
		videoplayer.setAttribute("volume", "2");
		videoplayer.setAttribute("button-rotation", "0 0 0");
		videoplayer.setAttribute("button-scale", "0.5 0.5 0.5");
		videoplayer.setAttribute("spatial-min-distance", "1");
		videoplayer.setAttribute("spatial-max-distance", "1000");
		videoplayer.setAttribute("playlist", youtubePlaylist);
		videoplayer.setAttribute("announce", "false");
		videoplayer.setAttribute("resolution", "256");
		// videoplayer.setAttribute("announce-four-twenty", "false");
		videoplayer.setAttribute("data-playlist-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/_.png?v=1714666440498");
		videoplayer.setAttribute("data-vol-up-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/%2B.png?v=1714666442133");
		videoplayer.setAttribute("data-vol-down-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/-.png?v=1714666441793");
		videoplayer.setAttribute("data-mute-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/X.png?v=1714666440845");
		videoplayer.setAttribute("data-skip-forward-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/f.png?v=1714666441500");
		videoplayer.setAttribute("data-skip-backward-icon-url", "https://cdn.glitch.global/cedb7f93-2ff8-496d-a164-76f83f5d489a/b.png?v=1714666441203");
		videoplayer.setAttribute("src", "https://best-v-player.glitch.me/playlist.js"); // https://vidya.sdq.st/playlist.js
    document.querySelector("a-scene").appendChild(videoplayer);
  } else {console.log("YouTube Player Loading...");}
};

let screenDisabled = true;
function enableTheFireScreen() {
  if (screenDisabled){ screenDisabled = false;
	console.log("Adding Screen Cast");
	const firescreen = document.createElement("script");
	firescreen.id = "-firescreen";
	firescreen.setAttribute("scale", "3 3 3");
	firescreen.setAttribute("rotation", "0 -90 0");
	firescreen.setAttribute("position", "-63.245 -6.48 7.01");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1920");
	firescreen.setAttribute("height", "1080");
	firescreen.setAttribute("castmode", "true");
	firescreen.setAttribute("backdrop", "false");
	firescreen.setAttribute("hand-controls", "true");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-four-twenty", "false");
	firescreen.setAttribute("announce-events", "false");
	firescreen.setAttribute("volume", "0.5");
	firescreen.setAttribute("button-position", "0 0.22 0");
	firescreen.setAttribute("website", websiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreen.js");
	document.querySelector("a-scene").appendChild(firescreen);
  }
  // setTimeout(() => { 
  //   let firescreencast = document.getElementById("fires-browser1");
  //   firescreencast.browser.RunActions(JSON.stringify({"actions":[{"actionType": "click2d","strparam1": "0.5,0.5;"}]}));
  //   console.log("Click Browser");
  // }, 3000); 
    console.log("Screen Stuff enabled");
}

let screenPortableDisabled = true;
function enableThePortableFireScreen() {
  if (screenPortableDisabled){ screenPortableDisabled = false;
   setTimeout(() => { 
	console.log("Adding Fire Tablet");
	const firescreen = document.createElement("script");
	firescreen.id = "-portable-firescreen";
	firescreen.setAttribute("scale", "0.6 0.6 0.6");
	firescreen.setAttribute("rotation", "0 180 0");
	firescreen.setAttribute("position", "-25.32 -6.8 9.68");
	firescreen.setAttribute("mipmaps", "0");
	firescreen.setAttribute("pixelsperunit", "1200");
	firescreen.setAttribute("width", "1280");
	firescreen.setAttribute("height", "720");
	firescreen.setAttribute("announce", "false");
	firescreen.setAttribute("announce-events", "false");
	firescreen.setAttribute("volume", "0.5");
  firescreen.setAttribute("backdrop", "true");
	firescreen.setAttribute("custom-button01-url", "https://jackbox.tv");
	firescreen.setAttribute("custom-button01-text", "Jackbox.tv");
	firescreen.setAttribute("custom-button02-url", "https://papas.tv");
	firescreen.setAttribute("custom-button02-text", "Papas.tv");
	firescreen.setAttribute("custom-button03-url", "https://firer.at/pages/scuffeduno.html");
	firescreen.setAttribute("custom-button03-text", "ScuffedUNO");
	firescreen.setAttribute("website", otherwebsiteurl);
	firescreen.setAttribute("src", "https://firer.at/scripts/firescreenv2.js");
	document.querySelector("a-scene").appendChild(firescreen);
   }, 5000); 
  }
    console.log("Fire Tablet enabled");

}
