-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: coins
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `coingroup`
--

DROP TABLE IF EXISTS `coingroup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coingroup` (
  `id` int NOT NULL AUTO_INCREMENT,
  `groupname` varchar(100) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coingroup`
--

LOCK TABLES `coingroup` WRITE;
/*!40000 ALTER TABLE `coingroup` DISABLE KEYS */;
INSERT INTO `coingroup` VALUES (1,'Bullion coins','https://mega.nz/file/3BoTWR6T#mERQTxbyCeYCW_zBePztwMZN1BQ9zGs9nUvmZqH9H0U'),(2,'Exclusive coins','https://mega.nz/file/7UISBYiZ#UMAylpXtepad9H23C5zFx2A7AI5X_m7qQUy1qenmSyw'),(3,'Commemorative coins','https://mega.nz/file/PYwSTQZJ#yecjo_ocOgFEhH0Fu-_IHrY2V_RE1mpLF16TTcN48FM');
/*!40000 ALTER TABLE `coingroup` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coin_name` varchar(100) DEFAULT NULL,
  `gorup_id` int DEFAULT NULL,
  `description_s` text,
  `description_l` text,
  `weight_g` float DEFAULT NULL,
  `price_$` float DEFAULT NULL,
  `year` int DEFAULT NULL,
  `denomination` varchar(100) DEFAULT NULL,
  `quality_id` int DEFAULT NULL,
  `composition_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (1,'Canadian Beaver',3,'\"Canadian beaver\". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.','In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark. In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription \"5 cents\" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.',4.54,40,1965,'5 cents',1,1,1,6),(2,'Looney',3,'\"Looney\". Unique coin with the image of a goat. Canadian dollar symbol.','The reverse of the coin depicts a black goat - a symbol of Canada and an inscription divided into the lower and upper semicircle \"Canadian dollar\". The obverse depicts Queen Elizabeth II. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is the year of coinage.',5.4,65,1970,'1 dollar',1,2,1,18),(3,'Jefferson',3,'Unique coin featuring Thomas Jefferson, the 3rd American president. Face value - 5 cents.','The obverse of the coin depicts a bust of the 3rd American president, Thomas Jefferson. The inscription on the right semicircle \"IN GOD WE TRUST\". Below is the inscription “FREEDOM” and the year of minting. Under the image of Jefferson was a monogram of an engraver. The initials of the engraver FS first appeared on coins in 1966. The reverse side shows the Jefferson Monticello estate, as well as the inscription: on the top - the motto “E PLURIBUS UNUM”, on the bottom - the inscriptions “MONTICELLO”, “FIVE CENTS” and “UNITED STATES OF AMERICA”.',3.54,35,1966,'5 cents',1,1,2,15),(4,'Kennedy',3,'The unique coin is made in honor of the assassination of the 35th president of Texas.','On November 22, 1963, in connection with the assassination of the 35th President John F. Kennedy in Dallas (Texas), it was decided to perpetuate the memory of President Kennedy on a coin. On the obverse to the right is a portrait of the 35th President of the United States, John F. Kennedy. Captions: FREEDOM / IN GOD WE TRUST / 1993. The reverse depicts the US state emblem (bald eagle with a shield) in the ring of stars. Captions: UNITED STATES OF AMERICA / E PLURIBUS UNUM / HALF DOLLAR.',4.3,43,1963,'half dollar',1,1,2,16),(5,'Canadian Cent',3,'\"Canadian cent.\" A unique coin with the image of maple leaves - symbols of Canada. Face value - 1 cent','On May 3, 2012, the Department of the Treasury of Canada announced the cessation of production of a 1 cent coin. The latest issues of the famous 1-cent maple leaf were minted in 2012. On the reverse, in the center of the coin are two maple leaves (the symbol of Canada), the year of issue is 2012 on the left. The upper part of the coin shows the denomination: 1 cent (1 cent), in the lower part of the inscription in a semicircle: CANADA. On the obverse in the center of the coin on the right is a portrait of Queen Elizabeth II. Along the edge of the coin there is an inscription: Elizabeth II D G REGINA.',2.7,8,1965,'1 cent',1,4,1,7),(6,'A penny',3,'\"A penny\". A unique coin with a shield image with 13 vertical stripes.','Minted from 1793 to the present day. In 1959, on the 150th anniversary of the birth of Lincoln, the reverse design was changed. Instead of wheat spikelets, the image of the Lincoln Memorial was depicted on the coin. On the surviving copies you can see the image of the statue of the 16th American president between the columns. Coins of this type were minted in multi-billion copies until 2008. Another round date (200 years since the birth) was marked by the minting of 4 coins, which symbolized the periods of life of Abraham Lincoln. In 2010, the design of the coin was changed - the reverse depicts a shield with 13 vertical stripes, symbolizing the state and national unity.',5.1,8,1793,'1 cent',1,4,2,2),(7,'25 cents',3,'Unique coin depicting a caribou (reindeer). The face value of the coin is equal to a quarter of the Canadian dollar.','The obverse depicts Queen Elizabeth II. The caribou (reindeer) is depicted on the reverse. A modern design (with a deer) has been used since the time of King George VI, when the design of other Canadian coins also changed. Under previous kings, a different design was used for coins from 5 to 50 cents. On the reverse side was the name of the coin in small letters, framed by maple leaves, with a crown at the top. Ordinary quarters are minted with a caribou on the back. In 2004, Memorial Day was released. The reverse shows a poppy flower.',5.7,80,1966,'25 cents',1,1,1,1),(8,'Dim Sum',3,'Dim Sum is a 10-cent coin of the United States that has been minted from 1946 to the present. This is a unique coin with the image of a torch, oak and olive branches.','The obverse of the coin depicts a portrait of the 32nd President of the United States, Franklin D. Roosevelt, and the reverse depicts a torch, oak and olive branches above the motto “E pluribus unum” - “Out of many.” After the death of Franklin Roosevelt in 1945, it was decided to put his image on a coin to perpetuate his memory. The choice of a coin denomination of 10 cents was due to the fact that in 1938 Roosevelt made a lot of efforts to create the National Fund Fund, which is half joking, and since 1979 it has been officially called the “March of ten cents”.',4.25,10,1946,'10 cents',1,1,2,11),(9,'South Vietnamese Dong',1,'Currency of the Republic of Vietnam in 1955-1975 Coin with the image of wheat.','Currency of the Republic of Vietnam in 1955-1975. On the front side, we see wheat, and on the back, a unit symbolizing money. The monetary unit of South Vietnam was originally the Indochinese piastre, issued by the Institute of Emissions of the States of Cambodia, Laos and Vietnam. Banknotes of the graduating institute were issued in three types: Cambodian, Lao and Vietnamese. The inscriptions on the banknotes of all samples were made in four languages: French, Khmer, Lao and Vietnamese. Vietnamese-style banknotes depicted a pattern, as well as the inscription “VIÊN PHÁT-HÀNH”. Piastres previously issued by the French Bank of Indochina were also in circulation.',5.05,56,1955,'1 dong',1,1,3,22),(10,'The British Antelope',1,'Unique coin depicting an antelope. British South African gold coin with a face value of 1/2 pound. It has been produced since 1952.','On one side of the coin is the head of King George VI, turned to the left. Also at the top in a semicircle is the inscription GEORGIVS SEXTVS REX. On the other side of the coin is an Antelope. Around it is the inscription SOUTH AFRICA 1952 SUID AFRICA, dotted with dots. Below is the nominal value.',6.3,78,1952,'1/2 pound',1,2,4,24),(11,'Cron',1,'A unique coin depicting a Knorr Viking ship at sea.','Coin 1 crown was issued from August 1, 1934 to March 25, 1941, during the first period of Estonia’s independence. On the obverse of the coin in the center is a large state seal, the emblem of Estonia, crowned with an arched text with the inscription “Eesti Vabariik”, and on the lower edge - the year of issue “1934”. The reverse depicts a Viking ship Knarr in the sea, under which appears the inscription 1 crown. In 2012, a single crown coin. 1934 was recognized as \"the most beautiful coin ever circulated in Estonia.\"',5.67,79,1934,'1/2 pound',1,2,6,10),(12,'Franc',1,'Unique coin with the image of a walking elephant. \"Frank\" of the Belgian Congo.','On the reverse of the coin in its central part there is an inscription in French: \"2 francs\" - 2 francs, framed by a five-pointed star. Along the edge from left to right there is an inscription in French and Dutch in two lines: “BANQUE DU CONGO BELGE”, “BANQUE VAN BELGISCH CONGO” - Bank of the Belgian Congo. The edge of the coin is decorated with decorative teeth. On the reverse of the coin in the central part is a walking elephant. The year of minting is located under it: 1947. The edge is uneven.',5.45,68,1947,'2 francs',1,2,5,12),(13,'Stork',1,'Unique coin with the image of a flying stork. French coin at 2 two francs 1997.','Two francs by Georges Gynemer - a commemorative coin of two French francs, issued in 1997 in honor of the famous pilot of the First World War, Georges Gynemer, on the occasion of the 80th anniversary of the officer cross of the Legion of Honor and his death: shot down in flight by a German plane. They are painted by engravers of the workshop of coins and medals under the direction of the general engraver of coins Pierre Rodier 4. The obverse depicts a portrait of Georges Gainemer in a flight suit and pilot\'s glasses, raised to his forehead. The inscription GEORGES GUYNEMER 1894-1917 in a semicircle at the top of the coin. And also the year of release below. The reverse shows a flying stork. Also below the arc is the inscription LIBERTÉ ÉGALITÉ FRATERNITÉ, separated by dots. And the face value at the top of the coin.',6.57,54,1997,'2 francs',1,4,7,23),(14,'Gyeonggi',1,'\"Gyeonggi\". Coin with the image of five kangaroos - symbols of Australia.','The first Australian coin with a nominal value of 1 dollar was introduced on May 13, 1984 to replace a one-dollar banknote. The portraits of Elizabeth II on the obverse of the 1984, 1985 and 1988 coins were made by Arnold Machin, and on the 1999 coins by Ian Rank-Broadley. The reverse of the coin depicts five kangaroos symbolizing Australia. The drawing was designed by Stuart Devlin in 1966. The first Australian $ 1 coin was introduced on May 13, 1984 to replace a one-dollar bill. This is currently the most common coin denomination in Australia.',4.76,97,1984,'1 dollar',1,2,8,13),(15,'Bolivian Peso',1,'Boliviano Coin with the image of Bolivia.','By 1987, the Bolivian peso had completely depreciated and was replaced by a new boliviano during another monetary reform. Old banknotes were printed and used as a \"bargaining chip.\" And in 1988, they began to mint a real coin.This currency is still in circulation. At the top of one of the sides of the coin in a semicircle is the inscription REPUBLICADE BOLIVIA. At the bottom of the coin, an arc depicts 10 stars. Above, on the other side of the coin, the inscription PESO BOLIVIANO is located in an arc. In the middle is an image of face value. At the bottom of the year, framed on both sides by branches.',3.62,54,1988,'1 peso',1,4,9,4),(16,'Botswana',1,'\"Botswana\". Coin with the image of a bird.','Coin of state of Botswana 1976.Translated from Botswana, its name means “let it rain”. After gaining independence from the United Kingdom in 1966, Botswana was a member of currency unions.In 2005, as a result of inflation, the currency fell by 12%, but it still remains one of the “strong” currencies on the African continent.',4.28,62,1976,'1 thebe',1,4,10,5),(17,'Virginia',1,'Virginia Coin with the image of a seahorse. Coin created during the reign of Elizabeth II.','The obverse depicts Her Majesty Queen Elizabeth II. At the top of the coin is the inscription British Virgin Islands Queen Elizabeth II 2014. The reverse depicts a beautiful seahorse with a tail wrapped around a coral. The choice of seahorse reflects the marine heritage of the British Virgin Islands. The British Virgin Islands, located in the Caribbean Sea and consisting of more than 60 islands, are known for their coral reefs, which are home to a wide variety of animal species, including seahorses. Seahorse is the name given to 54 species of marine fish in the genus Hippocampus, which comes from the ancient Greek hippos, which means “horse”, and Campos - “sea monster”.',6.98,108,2014,'5 dollars',1,1,11,NULL),(18,'Theobroma Cocoa',1,'Coin with a lion in the center of the shield. Ghana coin, published in 1967.','The reverse depicts a runaway lion in the center of a shield divided into four parts, separating the date and the face value. The inscription at the top of the coin is TWENTY As for the images inside the coat of arms: upper left: sword (used by chieftains) and staff (used by a linguist for ceremonial events) top right: OSU castle at sea (Presidential Palace), bottom left: cocoa tree (agricultural wealth of Ghana). Bottom right: a gold mine (rich in industrial minerals and natural resources) in Ghana. The Golden Lion and George intersect in the center (a permanent connection between Ghana and the Commonwealth of Nations).',4.76,54,1962,'20 pesewas',1,4,12,NULL),(19,'Coin of the Weimar Republic',1,'The Hindenburg Coin with the coat of arms of the Weimar Republic.','On the obverse, in the center of the coin, at the top is the coat of arms of the Weimar Republic. In the center below is the coat of arms of the Hindenburg family. This is a shield divided into 4 fields - in the upper left and lower right corners there is a head of a bull. On the reverse side is a portrait of Paul von Hindenburg (1847–1934), Field Marshal, President of the Weimar Republic in 1925–1934 (right). Along the edge of the coin is a semicircle of date: 1847-1927 and the inscription: * * REICHSPRASIDENT * VON * HINDENBURG •. At the bottom left of the portrait is a letter denoting a German mint.',4.76,142,1927,'5 Mark',1,3,13,8),(20,'Scientist',1,'Silver Egyptian coin with the image of the god Thoth. Silver Egyptian coin.','Face value one pound. It has been produced since 1981. The coin shows the name of the country and its meaning in Arabic. Also depicted is the Egyptian god Thoth. On the other side is a travel plate left by a radiant sun gear and splatter. The Egyptian pound is often shortened as LE or L. E., which means livre égyptienne (French for Egyptian pound).',3.95,112,1981,'1 pound',1,3,14,21),(21,'Lion sedge',2,'Indian coin with the image of a lion Ashoka. Face value 1 one rupee. 1975 edition.','It depicts the lion Ashok on his pedestal. It is surrounded by the inscription of the name of the country in two languages, meaning and date, surrounded by stylized stalks of grain. The rupee (from Sanskrit silver) is an Indian historical silver coin, put into circulation in the 15th century, as well as the monetary unit of a number of countries in South Asia. After the British conquest of Burma in 1852, the Indian rupee became its currency. In 1938, Burma became an independent British colony. A year earlier, the release of the Burmese rupee, which lasted until 1952, began. In 1952, the Burmese rupee was replaced by a kyat. The rupee remained the currency of Portuguese possessions in India until 1959, when it was replaced by the escudos of Portuguese India.',4.95,76,1975,'1 rupee',1,4,15,17),(22,'Rial',2,'Iranian silver coin with the image of a lion. Face value 5000 five thousand dinars (5 five taps). 1928 year.','It depicts a bust of Reza Shah, whose head is turned to the right. On the other side is a lion with a saber in front of the radiant sun. Above it is a crown. Before the monetary reform of 1932, the currency of Iran was fog. (1 fog = 10 clicks, 1 crane = 1000 dinars.) Currently, the name \"fog\" is used to denote the amount of 10 reais.',6.12,98,1928,'5000 dinars',1,3,16,19),(23,'ISK',2,'Icelandic coin with a picture of a fish. Face value 1 Icelandic krona','Initially, the krone consisted of 100 Eire (ISL. EYRIR, MN. CH. ISL. Aurar), but since January 1, 1995 Eire has not been used in monetary circulation. From January 1, 1999, in accordance with Law No. 36 of April 27, 1998, amounts must be rounded to 50 Eire. Coin minting in Krona began in 1925. Initially, all coins had a monogram of King Christian X. Iceland was declared a Republic in 1944, and in 1946 it began to mint coins without royal symbols. Icelandic coins were minted by the Royal Mint of Denmark, the Royal Mint of Great Britain and a private mint in Birmingham.',5.42,78,2007,'1 Icelandic krona',1,1,17,14),(24,'Yemen',2,'Coin of South Arabia (Yemen) with the image of a viral boat. Coin in 25 twenty five fils.','An octagonal star with dots is depicted on one side of the coin. On the other side, a sailboat divides bills into English and Arabic. Until 1951, Indian rupee and East African shilling traded in the British colony of Aden. In 1951, East African shilling was declared the only legal tender in Aden. In 1959, the Federation of the United Arab Emirates of the South was formed, which was transformed into the Federation of South Arabia in 1962. Aden joined the Federation in 1963. In April 1965, the South Arabian Dinar was issued and published by the South Arabian Monetary Authority. East African shillings were exchanged for dinars until July 1, 1965 at a ratio of 20 shillings = 1 dinar. Dinar was equated to pound.',5.47,69,1964,'25 fils',1,1,18,NULL),(25,'Woman',2,'1 yuan Chinese coin with a picture of a woman. 1986 edition.','On one side of the coin is a woman sitting on a stone. Doves fly around her. On the other side is a Chinese weapon with stars. Today, the term \"yuan\" usually refers to the main unit of account of the renminbi (renminbi), the currency of the People’s Republic of China. Yuan banknotes start at one yuan and go up to 100 yuan. The yuan symbol is also used in Chinese to denote the monetary units of Japan (yen) and Korea (won) and is used to convert the currency to the dollar, as well as to some other currencies; for example, the US dollar is called in Chinese meiyuan',6.02,48,1986,'1 yuan',1,1,19,NULL),(26,'Alligator',2,'Chinese coin with the image of an alligator. 5 yuan Chinese coin. 1998 edition.','It depicts a Chinese alligator on the banks of the river. On the other side is a Chinese weapon with stars. It is surrounded by hieroglyphs and a coin release date.',7.24,78,1998,'5 yuan',1,1,19,3),(27,'The Golden Panda',2,'Chinese coin with the image of two pandas. 5 yuan Chinese coin. 1993 edition.','On one side of the coin are two pandas. At the top of the coin are Chinese characters in an arc. On the other side is a Chinese weapon with stars, surrounded by hieroglyphs. Below is written the year of release. Chinese Golden Panda, launched in 1982. Coins (front side) remain unchanged since 1992. There is also a Silver Panda investment coin series, made in a similar design.',7.24,82,1993,'5 yuan',1,1,19,15),(28,'Costa Rica',2,'Costa - African coin with the image of manatee. Costa Rican coin of 100 columns. It has been produced since 1974.','On one side of the coin is a shield with a sailing ship in front of the mountains. Below is the release date of the coin. On the other side of the coin is a manatee among algae. The Costa Rican coin is the monetary unit of Costa Rica. Until 2017, the All-Russian classifier of currencies is the \"Costa Rican Colony\".',5.24,78,1974,'100 columns',1,1,20,9),(29,'Year of the children',2,'Costa is an African coin depicting three chicks in a nest. Costa Rican coin of 100 columns. It has been produced since 1979.','On one side of the coin are 3 chicks in a nest, symbolizing the International Year of Children. On the other side is a shield with a sailing ship in front of the mountains, the shining sun behind the mountains. In circulation are banknotes: 1000 columns of series A and B (red, polymer), 2000 columns (blue with a shark of Mauro Fernandez on one side and a bull shark on the back), 5000  columns of series A and B (yellow with Alfredo González Flores) with one side and capuchin  monkeys on the back), 10,000 columns (green), 20,000 columns and 50,000 columns. In the monetary circulation of the country are coins in denominations of 500, 100, 50, 25, 20,  10, 5 and 1 column.',5.24,72,1979,'100 columns',1,1,20,NULL),(30,'Sailboat',2,'Portuguese silver coin with the image of a sailing ship. ','Portuguese silver coin in 5 five escudos. It has been produced since 1933. On one side of the coin is a sailing ship floating in the sea. On the other side of the coin is a shield with smaller shields in front of a stylized globe.',4.4,134,1933,' 5 escudos',1,3,21,20);
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `composition`
--

DROP TABLE IF EXISTS `composition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `composition` (
  `id` int NOT NULL AUTO_INCREMENT,
  `composition` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `composition`
--

LOCK TABLES `composition` WRITE;
/*!40000 ALTER TABLE `composition` DISABLE KEYS */;
INSERT INTO `composition` VALUES (1,'nickel'),(2,'gold'),(3,'silver'),(4,'steel');
/*!40000 ALTER TABLE `composition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `country`
--

DROP TABLE IF EXISTS `country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `country` (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `country`
--

LOCK TABLES `country` WRITE;
/*!40000 ALTER TABLE `country` DISABLE KEYS */;
INSERT INTO `country` VALUES (1,'Canada'),(2,'United States of America'),(3,'Republic of Vietnam'),(4,'British South Africa'),(5,'Belgian Cango'),(6,'Estonia'),(7,'France'),(8,'Australia'),(9,'Bolivia'),(10,'Bostwana'),(11,'British Virgin Islands'),(12,'Ghana'),(13,'Weimar Republic'),(14,'Egypt'),(15,'India'),(16,'Iran'),(17,'Iceland'),(18,'Yemen'),(19,'China'),(20,'Costa Rica'),(21,'Portugal');
/*!40000 ALTER TABLE `country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(100) DEFAULT NULL,
  `image_url_front` varchar(255) DEFAULT NULL,
  `image_url_back` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'25 cents','https://mega.nz/file/bBJziRIC#H-WOt9Um7aH3ImmkvihuyEgkCmtPOpsN4v6lzZ2g-VI','https://mega.nz/file/7d5C3R7Z#Vzr2XxvFDfZiWtnTZGGUiOB05J7wKkSRcMVUDDCutRg'),(2,'A penny','https://mega.nz/file/bVxhXLzJ#k7jrVr_IWS3b6VykToVhENmV4i19_9d0F2e24EIpKqM','https://mega.nz/file/eE512CgR#n10YDOwlDiQuc79_rWrlctahe-n9zffs54pJ7tbZcH8'),(3,'Alligator','https://mega.nz/file/6YJTnQpR#1ohWwQfOpRc-1croCgknO1k1HkCeSQmUb34696ENKd0','https://mega.nz/file/7cZmmSzC#-W5CZ2E82UImQvn7n39r_g67NYnhdqSA84YCsU5Rosw'),(4,'Bolivian Peso','https://mega.nz/file/TNIxhSaK#7MxWo9lYyS-5LlkwEpzroFK6F77tsLBLa7f8pVps1Go','https://mega.nz/file/iMZBFAyC#hA5-214uawywYZNjX4XDB17lWAk1moehhmaPtD9Rcn4'),(5,'Bostwana','https://mega.nz/file/zdwWjR4K#8jN4_X0_8sBQ9rRGkwEQXbrrBuQVsUzkLUgph7lYFDs','https://mega.nz/file/XcwEXJKY#UszSFSYpTCW16qdGUNGV7h-TL-hXDJb6hzs51omzENE'),(6,'Canadian Beaver','https://mega.nz/file/qYgk3JLJ#aRz2yucO_VqTc403kAnKEBC1s8fLZ7DgDxd5FzoRoPE','https://mega.nz/file/WFQ0RAjD#hDkikg6jcgj2a1w_nxJXalHBdh8t73JdemRAL8a_Ggo'),(7,'Canadian Cent','https://mega.nz/file/fd5VyYzZ#udlOMc5F7cQoxrwvmEcOgOPk8G28FwwxVa5_S_LXXNM','https://mega.nz/file/HUg1lCCQ#i4hCa6AvGWKtxDSwEZlMNo9u8_AB6q-mk4tRU5W9pj8'),(8,'Coin of the Weimar Republic','https://mega.nz/file/eNZ0nABK#c7B2LtRkyZDAJAgzw4qkTBY93Xt7w_7eGGSqw0lIs0s','https://mega.nz/file/bZhFlKLS#7MrEptnI73o0X3nHHf8lK2PBKwLinOrLJubH6UUgvCU'),(9,'Costa Rica','https://mega.nz/file/iRoSHYaZ#UNmOWLX9TdYaLXjeKZsakZCOUZfwB7I5q85HSztMd14','https://mega.nz/file/3IYG0IrZ#LjN8FYTs9Xo10KBVL3QsviFNcS5uQeAKhg-8MoOAKME'),(10,'Cron','https://mega.nz/file/HNJGzKwK#K9ulKfAGzD8XqHaK6uxfAONEmWJeTQ1gVU7EasWacAs','https://mega.nz/file/zFxABK5Z#AnwnHVIG7FhwPGr5_Estqr_iM3ab8I9TlMJiopLZ1Qo'),(11,'Dim Sum','https://mega.nz/file/vF52jKrL#GiaeK0fwy8ryhCLDhLQoNYckCaCKZrX5GrNQs-S-_dI','https://mega.nz/file/GURAWa5K#4OcS-9m6Cu2mgdYPbQepKJAz3Eb2tXbXwHXUmYkQzJs'),(12,'Franc','https://mega.nz/file/WYgnVRAQ#dxQ-hzmUvGjDNgEnE5FQlXQDbIjVERHNyyMkR6PjWwQ','https://mega.nz/file/WIBwTYSC#roo_4wE6hYkd4FCRM-TwQFqM53vMTVLamD22fkDIo_M'),(13,'Gyeonggi','https://mega.nz/file/aJYE0Tya#JpD-GWcT1pXYu7-47nstJrZkLI5EeM3i-3eFd6vFhrQ','https://mega.nz/file/7dIznA5D#6s9_QUTxkDwOrtXUxZcdI8ll3-kgISdNyVhX4hb7FbA'),(14,'ISK','https://mega.nz/file/aAwRlKoD#DHBn4uoYSdH6Jk1D48_xOGqd_iIcjUe1zjmohQGiAwg','https://mega.nz/file/7UISBYiZ#UMAylpXtepad9H23C5zFx2A7AI5X_m7qQUy1qenmSyw'),(15,'Jefferson','https://mega.nz/file/yZQRUa4Z#MY65B5GOb9MebNU-ySyipcBfZxegfj05N-oicx74k_I','https://mega.nz/file/yBRRjBbY#UATMW9_0GIduMeQ4ttFqTBCOE4Ty7Z5hclBL2I64lLI'),(16,'Kennedy','https://mega.nz/file/WIxUXDDS#3Gynd63rUJW-7P74b0-yIc4bVLZsoBm6C1HS9yvc-XE','https://mega.nz/file/TBRHUTZA#JZsDbIQAX-8jjGU4wmgUU65H-XhRKklKFqNmcSzaLxo'),(17,'Lion sedge','https://mega.nz/file/ado1xQpA#LmNFWZUnysQ0tFEqWPfhtpYki2LlFKmPck6Gd2uZsDk','https://mega.nz/file/yRAADYLZ#AZutAcfaUiwomgSZWpn7XwnLbh5ZUY7txaOsNwZgRYM'),(18,'Looney','https://mega.nz/file/PYwSTQZJ#yecjo_ocOgFEhH0Fu-_IHrY2V_RE1mpLF16TTcN48FM','https://mega.nz/file/GNoFDSpI#VhBtwbzUZp2tNJ1MBBobz63tk2Vu5sebvFCGQXvsUGo'),(19,'Rial','https://mega.nz/file/GA4yARra#puHEeC4_sEpo8o0Ul1p7Nv_Habtk4uCMzA-mPdIhB9w','https://mega.nz/file/OUoVmIAZ#WsGHoUkcgDIL7DjAhlqMAYvS_7CMGxhYRdD0bt5OnSo'),(20,'Sailboat','https://mega.nz/file/bJAF2YIY#GTSpt60-SQ9Y3HHKsC8KDVdMUr98USeLqaHsK62SdtI','https://mega.nz/file/LdB0XaTZ#Tlh6MLRWJx5nsviUBv3IC9Qrc7cwPYAjmuRdnEJwzUY'),(21,'Scientist','https://mega.nz/file/qV4lzYbB#thxYF44FwnyIai716IH6GEGGhbYQnOKGlbJlamEsej8','https://mega.nz/file/CZgRgRTJ#VLNyy45PZMomKmpzFHGMUsMGl5rwzD94K3t0JcfhSX4'),(22,'South Vietnamese Dong','https://mega.nz/file/3BoTWR6T#mERQTxbyCeYCW_zBePztwMZN1BQ9zGs9nUvmZqH9H0U','https://mega.nz/file/yIB2ARxB#MPY31NSu6PhtS5Xo5qowi9w-2XrVktZ0LskdXyms2xc'),(23,'Stork','https://mega.nz/file/OYoy0Dpb#C5PSS9x2zLyTltV1GF0c1StmPXKtHLTrYSralha3dNg','https://mega.nz/file/ucAjFJbD#pBtCSQRQOWCO0K-g4qjCd-jxf7u7lrSS4c5JZWze68k'),(24,'The British Antelope','https://mega.nz/file/PMYwgbTb#nqWfGHptlLsEsHvBvQn-O_AtEWDQy4zFGPe0_WzJxpY','https://mega.nz/file/zRRCwZST#CtgM2Di4PiCTIIO6YimslRmazNfhkINDEGXjPtW5XTs'),(25,'The Golden Panda','https://mega.nz/file/PBxExbRb#RRLbo0uHJ7KtgMHvTVNDHWfb48g8wimESMLOHegeDJs','https://mega.nz/file/OEo0gRIb#3XDvIrJ1FeW-oSgsbp-V3me_a2ylvhdEIfA8lGKJv_A');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quality`
--

DROP TABLE IF EXISTS `quality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quality` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quality` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quality`
--

LOCK TABLES `quality` WRITE;
/*!40000 ALTER TABLE `quality` DISABLE KEYS */;
INSERT INTO `quality` VALUES (1,'BU');
/*!40000 ALTER TABLE `quality` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-11 20:06:35
