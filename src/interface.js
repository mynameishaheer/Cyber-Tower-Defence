let nearestTileX, nearestTileY;
TILE_WIDTH = 100;
TILE_HEIGHT = 50;
GRID_SIZE = 15;

let selectedTile = null;

class Interface {
  constructor() {
    this.selected = "none";
  }

  //* General Interface Functions
  drawTitle() {
    textFont(interfaceLargeFont);
    textSize(48);
    fill(147, 186, 86, 255);
    text("Cyber Tower Defence", 25, 79);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(24);
    text("Defend the network against the cyber attacks", 25, 120);
  }

  drawStats() {
    textFont(interfaceSmallFont);
    textSize(18);
    fill("red ");
    text("Enemies Killed: " + enemiesKilled, 25, 160);
    fill("black");
  }

  drawNetworkHP() {
    textFont(interfaceSmallFont);
    textSize(18);

    textFont(interfaceSmallFont);
    textSize(24);
    fill("black");
    text("Network HP ", width - 320 - 180, 90);
    if (network.hp <= 0) {
      fill("darkred");
    } else if (network.hp <= 50) {
      fill("darkorange");
    } else {
      fill("darkblue");
    }
    textFont(interfaceLargeFont);
    textSize(30);
    text(network.hp + " HP", width - 320 - 180, 120);
    textFont(interfaceSmallFont);
    textSize(20);
    fill("black");
  }
  //* General Interface Functions

  //! Cyber Attack Information Functions
  drawVirusInfo() {
    image(virusSprite, 25, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Virus", 30, 710);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Viruses are harmful software programs that can infect and\ndamage computer systems. To protect your computer, use\nantivirus software, keep your system and software updated," +
          " be\ncautious online, enable firewalls, use secure web browsers,\n" +
          "practice safe email habits, and regularly back up your files.\n\nPrevention is crucial in stopping viruses and safeguarding\nyour computer and data.",
        30,
        425
      );
    }
  }

  drawTrojanInfo() {
    image(trojanSprite, 25, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Trojan", 28, 810);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Trojans are malicious software programs that disguise themselves\nas legitimate files or applications, tricking users into executing\nthem." +
          " To protect your computer from Trojans, it is important to\nmaintain strong firewall protection and practicing safe browsing\n" +
          "habits.\n\nVigilance and proactive measures are essential in defending your\ncomputer and data against Trojans.",
        30,
        525
      );
    }
  }

  drawWormInfo() {
    image(wormSprite, 25, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Worm", 28, 910);
    fill("black");

    if (mouseX >= 25 && mouseX <= 81 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(25 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(25, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Worms are self-replicating malware that spread rapidly across\ncomputer networks. They exploit vulnerabilities to infect other\n" +
          "systems and can cause extensive damage by consuming network\nresources. To safeguard your computer, deploy an Intrusion\nDetection System (IDS)" +
          "to detect and block suspicious network\nactivity. \nIt is crucial to keep your software up to date and follow\nstrong network security practices to " +
          "prevent worm infections.",
        30,
        625
      );
    }
  }

  drawRansomewareInfo() {
    image(ransomwareSprite, 125, 630, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Ransomware", 108, 710);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 630 && mouseY <= 736) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 400 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 400, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Ransomware is malicious software that encrypts your files and\ndemands a ransom for their release. To protect against\nransomware," +
          "regularly back up your files and store them in a\nsecure location. Keep your systems and software up to date, use\nreliable antivirus software," +
          "and exercise caution when opening\nemail attachments or clicking on unknown links.\nBy staying vigilant and prepared, you can defend against\n" +
          "ransomware attacks and safeguard your valuable data.",
        130,
        425
      );
    }
  }

  drawDDoSInfo() {
    image(ddosSprite, 125, 730, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("DDoS", 133, 810);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 730 && mouseY <= 836) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 500 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 500, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "DDoS attacks overload a target system or network, causing\nservice disruptions. To defend against DDoS attacks, use network\nsegmentation" +
          "to isolate critical components. This prevents the\nentire network from being affected. Additionally, deploy\nspecialized tools like" +
          "Intrusion Detection Systems (IDS) to detect\nand mitigate DDoS attacks in real-time.\nBy promptly identifying and isolating malicious traffic," +
          "you can\nmaintain service availability and protect from DDoS disruptions.",
        130,
        525
      );
    }
  }

  drawSpywareInfo() {
    image(spywareSprite, 125, 830, 56, 56);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("black");
    text("Spyware", 118, 910);
    fill("black");

    if (mouseX >= 125 && mouseX <= 181 && mouseY >= 830 && mouseY <= 936) {
      fill(0, 0, 0, 100);
      rect(125 - 5, 600 - 5, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(125, 600, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Spyware is a type of malicious software that secretly collects\ninformation about a user's activities and sends it to unauthorized\nparties." +
          "Protect your computer from spyware by using reliable\nantivirus software and enabling encryption. Being cautious while\ndownloading files and" +
          " avoiding suspicious websites can also help\nprevent spyware infections.\nStay vigilant and regularly scan your system to detect and remove\nany" +
          "potential spyware threats.",
        130,
        625
      );
    }
  }
  //! Cyber Attack Information Functions

  //? Buy Station Functions + Cyber Defense Functions
  drawBuyStation() {
    noStroke();
    fill(30, 30, 30);
    rect(windowWidth - 320, 0, 390, height, 20);
    fill("black");
    noStroke();
    // text(this.selected, 200, 200);
    fill("white");
    textFont(interfaceLargeFont);
    textSize(30);
    text("Buy Station", width - 300, 60);
    fill("black");
    textFont(interfaceSmallFont);
    textSize(18);
  }

  drawIDS() {
    image(idsSprites[0], width - 300, 200);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Intrusion Detection System", width - 250, 230);
    fill("lightgreen");
    text("Cost: $100", width - 250, 260);

    if (
      mouseX >= width - 307 &&
      mouseX <= width - 257 &&
      mouseY >= 200 &&
      mouseY <= 270
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 200, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 200, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 205, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "IDS (Intrusion Detection System) is a vital security tool that\ndetects and alerts against unauthorized network activities." +
          "It\nkeeps a watchful eye on network traffic, identifying suspicious\npatterns and potential intrusions.\n\nWith IDS, you can proactively" +
          "safeguard your network, preventing\nunauthorized access and maintaining the security of your systems",
        width - 730,
        225
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawFirewall() {
    image(firewallSprites[0], width - 300, 300);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Firewall", width - 250, 330);
    fill("lightgreen");
    text("Cost: $100", width - 250, 360);

    if (
      mouseX >= width - 307 &&
      mouseX <= width - 257 &&
      mouseY >= 300 &&
      mouseY <= 370
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 300, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 300, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 305, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Firewalls act as a protective barrier between your computer\nnetwork and potential threats from the internet." +
          "They monitor and\ncontrol incoming and outgoing network traffic, filtering out\nmalicious connections and unauthorized" +
          "access attempts.\n\nFirewalls play a crucial role in safeguarding your system,\npreventing unauthorized access and ensuring" +
          "the security\nof your network and data.",
        width - 730,
        325
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawNetSeg() {
    image(netSegSprites[0], width - 300, 400);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Network Segmentation", width - 250, 430);
    fill("lightgreen");
    text("Cost: $100", width - 250, 460);

    if (
      mouseX >= width - 307 &&
      mouseX <= width - 257 &&
      mouseY >= 400 &&
      mouseY <= 470
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 400, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 400, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 405, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Network segmentation involves dividing a computer network\ninto smaller subnetworks, creating isolated\nsegments that" +
          " enhance security and control. By implementing\nnetwork segmentation, you can separate sensitive data and limit\naccess to" +
          " specific areas, reducing the potential impact of a breach\nand preventing lateral movement within the network.\nNetwork segmentation" +
          "improves the resilience of your network\nagainst cyber threats.",
        width - 730,
        425
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawEncryption() {
    image(encryptionSprites[0], width - 300, 500);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Data Encryption", width - 250, 530);
    fill("lightgreen");
    text("Cost: $100", width - 250, 560);

    if (
      mouseX >= width - 307 &&
      mouseX <= width - 257 &&
      mouseY >= 500 &&
      mouseY <= 570
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 500, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 500, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 505, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Data encryption is a vital security measure that protects sensitive\ninformation by converting it into unreadable code." +
          "\nIt ensures that only authorized individuals with the encryption key\ncan decipher and access the data, safeguarding it\nfrom" +
          " unauthorized interception and maintaining its confidentiality.\n\nImplementing robust encryption algorithms" +
          "enhances data security\nand minimizes the risk of data breaches or unauthorized access.",
        width - 730,
        525
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawBackup() {
    image(backupSprites[0], width - 300, 600);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Backup and Recovery", width - 250, 630);
    fill("lightgreen");
    text("Cost: $100", width - 250, 660);

    if (
      mouseX >= width - 307 &&
      mouseX <= width - 257 &&
      mouseY >= 600 &&
      mouseY <= 670
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 600, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 600, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 605, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Regular data backups are essential for preserving the integrity\nand availability of your important files and information." +
          "\nBy creating duplicate copies of your data and storing them in\nseparate locations, you can mitigate the impact of data loss\n" +
          "caused by various factors such as hardware failures, accidental\ndeletion, or malicious attacks.\nA reliable backup strategy ensures" +
          " that you can restore your data\neffectively and resume operations in the event of data loss.",
        width - 730,
        625
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawAntiVirus() {
    image(aVSprites[0], width - 300, 100);
    textFont(interfaceSmallFont);
    textSize(23);
    fill("white");
    text("Anti-Virus Software", width - 250, 130);
    fill("lightgreen");
    text("Cost: $100", width - 250, 160);

    if (
      mouseX >= width - 300 &&
      mouseX <= width - 240 &&
      mouseY >= 100 &&
      mouseY <= 180
    ) {
      fill(0, 0, 0, 0);
      stroke("white");
      rect(width - 307, 100, 50, 70);
      noStroke();

      fill("black");
      cursor("grab");
      fill(0, 0, 0, 100);
      rect(width - 740, 100, 410, 210, 20);
      fill("black");

      fill("white");
      noStroke();
      rect(width - 735, 105, 400, 200, 20);
      fill("black");

      textSize(18);
      text(
        "Antivirus software provides essential protection against various\ntypes of malware, including viruses, worms, trojans, ransomware,\n" +
          "and other malicious programs. It scans and detects potential\nthreats, removes or quarantines infected files, and helps\nsafeguard your" +
          "computer and data from harmful attacks.\n\nStay updated with the latest antivirus definitions and run regular\nscans to ensure ongoing" +
          "protection against evolving threats.",
        width - 730,
        125
      );
      if (mouseIsPressed) {
        cursor("grabbing");
        this.selected = "antivirus";
      } else {
        cursor("grab");
        this.selected = "none";
      }
    } else {
      cursor("default");
    }
  }

  drawAntivirusOnMouse() {
    if (this.selected == "antivirus") {
      cursor("grabbing");
      image(aVSprites[0], mouseX - 14, mouseY - 28);
    }
  }

  drawMoney() {
    fill("white");
    rect(width - 300, wHeight - 160, 280, 100, 20);

    fill("green");
    textSize(34);
    textAlign(CENTER, CENTER);
    text("$" + money, width - 157, wHeight - 110);
    textAlign(LEFT, BASELINE);
  }
  //? Buy Station Functions + Cyber Defense Functions

  update() {
    if (mouseIsPressed != true) {
      this.selected = "none";
    }
    if (this.selected == "antivirus") {
      if (mouseIsPressed != true) {
      }
      cursor("grabbing");
      this.drawAntivirusOnMouse();
    }
  }

  snap_to_nearest_road() {
    let minDistance = Infinity;
    let nearestTile = null;

    let mouseGridX = (mouseX - map.x_start) / TILE_WIDTH;
    let mouseGridY = (mouseY - map.y_start - TILE_HEIGHT / 2) / TILE_HEIGHT;

    let mouseIsoX = mouseGridY + mouseGridX;
    let mouseIsoY = mouseGridY - mouseGridX;

    // text("mouseX: " + mouseX, 200, 300);
    // text("mouseY: " + mouseY, 200, 320);
    // text("mouseIsoX: " + mouseIsoX, 200, 340);
    // text("mouseIsoY: " + mouseIsoY, 200, 360);

    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        let dist = Math.hypot(i - mouseIsoX, j - mouseIsoY);
        if (
          dist < minDistance &&
          (map.grid[j][i] === 33 || map.grid[j][i] === 34)
        ) {
          minDistance = dist;
          nearestTile = { i: i, j: j };
        }
      }
    }

    if (
      nearestTile &&
      (map.grid[nearestTile.j][nearestTile.i] === 33 ||
        map.grid[nearestTile.j][nearestTile.i] === 34)
    ) {
      let nearestTileX =
        map.x_start + (nearestTile.i - nearestTile.j) * (TILE_WIDTH / 2);
      let nearestTileY =
        map.y_start + (nearestTile.i + nearestTile.j) * (TILE_HEIGHT / 2);

      // text("nearestTileX: " + nearestTileX, 200, 380);
      // text("nearestTileY: " + nearestTileY, 200, 400);

      selectedTile = map.tiles.find(
        (tile) => tile.x === nearestTile.i && tile.y === nearestTile.j
      );

      // text("isOccupied: " + selectedTile.isOccupied, 200, 420);

      if (map.grid[nearestTile.j][nearestTile.i] === 33) {
        if (selectedTile.isOccupied === false) {
          image(aVSprites[4], nearestTileX - 25, nearestTileY - 12);
        } else {
          image(aVSprites[5], nearestTileX - 25, nearestTileY - 12);
        }
      } else if (map.grid[nearestTile.j][nearestTile.i] === 34) {
        if (selectedTile.isOccupied === false) {
          image(aVSprites[1], nearestTileX + 25, nearestTileY - 12);
        } else {
          image(aVSprites[2], nearestTileX + 25, nearestTileY - 12);
        }
      }

      // if (map.grid[nearestTile.j][nearestTile.i] === 33) {
      //   if (selectedTile.isOccupied === false) {
      //     image(map.selectedTileImageNotOccupiedY, nearestTileX, nearestTileY);
      //   } else {
      //     image(map.selectedTileImageOccupiedY, nearestTileX, nearestTileY);
      //   }
      // } else if (map.grid[nearestTile.j][nearestTile.i] === 34) {
      //   if (selectedTile.isOccupied === false) {
      //     image(map.selectedTileImageNotOccupiedX, nearestTileX, nearestTileY);
      //   } else {
      //     image(map.selectedTileImageOccupiedX, nearestTileX, nearestTileY);
      //   }
      // }
    }
  }

  draw() {
    this.drawTitle();
    this.drawStats();
    this.drawNetworkHP();

    //!
    this.drawRansomewareInfo();
    this.drawDDoSInfo();
    this.drawSpywareInfo();
    this.drawVirusInfo();
    this.drawTrojanInfo();
    this.drawWormInfo();
    //!

    //?
    this.drawBuyStation();
    this.drawAntiVirus();
    this.drawIDS();
    this.drawFirewall();
    this.drawNetSeg();
    this.drawEncryption();
    this.drawBackup();
    this.drawMoney();
    //?

    this.snap_to_nearest_road();
    this.update();
  }
}
