//Welcome to E for Engineer---SUBSCRIBE Now
#include "ThingSpeak.h"
#include <ESP8266WiFi.h>

//Replace your wifi credentials here
const char* ssid     = "Cloud Project";//Replace with your Wifi Name
const char* password = "project1234";// Replace with your wifi Password

//change your channel number here
unsigned long channel = 1277375;//Replace with your own ThingSpeak Account Channle ID

//1,2 and 3 are channel fields. You don't need to change if you are following this tutorial. However, you can modify it according to your application
unsigned int led1 = 1;
unsigned int led2 = 2;
unsigned int led3 = 3;
unsigned int led4 = 4;
unsigned int led5 = 5;
unsigned int led6 = 6;
unsigned int led7 = 7;
unsigned int led8 = 8;


WiFiClient  client;


void setup() {
  Serial.begin(115200);
  delay(100);
  
  pinMode(D1, OUTPUT);
  pinMode(D2, OUTPUT);
  pinMode(D3, OUTPUT);
  pinMode(D4, OUTPUT);
  pinMode(D5, OUTPUT);
  pinMode(D6, OUTPUT);
  pinMode(D7, OUTPUT);
  pinMode(D8, OUTPUT);
 
  digitalWrite(D1, 0);
  digitalWrite(D2, 0);
  digitalWrite(D3, 0);
   digitalWrite(D4, 0);
  digitalWrite(D5, 0);
  digitalWrite(D6, 0);
   digitalWrite(D7, 0);
  digitalWrite(D8, 0);
  
  // We start by connecting to a WiFi network
 
  Serial.println();
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  #define ON_Board_LED D0

   pinMode(ON_Board_LED, OUTPUT);
digitalWrite(ON_Board_LED, HIGH);
  
  WiFi.begin(ssid, password);
  
  while (WiFi.status() != WL_CONNECTED) {
    
    
     digitalWrite(ON_Board_LED, LOW);
    delay(250);
    digitalWrite(ON_Board_LED, HIGH);
    delay(250);
    Serial.print(".");
  }
 
  Serial.println("");
  Serial.println("WiFi connected");  
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.print("Netmask: ");
  Serial.println(WiFi.subnetMask());
  Serial.print("Gateway: ");
  Serial.println(WiFi.gatewayIP());
  ThingSpeak.begin(client);

}

void loop() {
 
  //get the last data of the fields
  int led_1 = ThingSpeak.readFloatField(channel, led1);
  int led_2 = ThingSpeak.readFloatField(channel, led2);
  int led_3 = ThingSpeak.readFloatField(channel, led3);
  int led_4 = ThingSpeak.readFloatField(channel, led4);
  int led_5 = ThingSpeak.readFloatField(channel, led5);
  int led_6 = ThingSpeak.readFloatField(channel, led6);
  int led_7 = ThingSpeak.readFloatField(channel, led7);
  int led_8 = ThingSpeak.readFloatField(channel, led8);
 
  if(led_1 == 1){
    digitalWrite(D1, 0);
    Serial.println("D1 is On..!");
  }
  else if(led_1 == 0){
    digitalWrite(D1, 1);
    Serial.println("D1 is Off..!");
  }
 
  if(led_2 == 1){
    digitalWrite(D2, 0);
    Serial.println("D2 is On..!");
  }
  else if(led_2 == 0){
    digitalWrite(D2, 1);
    Serial.println("D2 is Off..!");
  }
 
  if(led_3 == 1){
    digitalWrite(D3, 0);
    Serial.println("D3 is On..!");
  }
  else if(led_3 == 0){
    digitalWrite(D3, 1);
    Serial.println("D3 is Off..!");
  }
  if(led_4 == 1){
    digitalWrite(D4, 0);
    Serial.println("D4 is On..!");
  }
  else if(led_4 == 0){
    digitalWrite(D4, 1);
    Serial.println("D4 is Off..!");
  }
  if(led_5 == 1){
    digitalWrite(D5, 0);
    Serial.println("D5 is On..!");
  }
  else if(led_5 == 0){
    digitalWrite(D5, 1);
    Serial.println("D5 is Off..!");
  }
  if(led_6 == 1){
    digitalWrite(D6, 0);
    Serial.println("D6 is On..!");
  }
  else if(led_6 == 0){
    digitalWrite(D6, 1);
    Serial.println("D6 is Off..!");
  }
   if(led_7 == 1){
    digitalWrite(D7, 0);
    Serial.println("D7 is On..!");
  }
  else if(led_7 == 0){
    digitalWrite(D7, 1);
    Serial.println("D7 is Off..!");
  } 
  if(led_8 == 1){
    digitalWrite(D8, 0);
    Serial.println("D8 is On..!");
  }
  else if(led_8 == 0){
    digitalWrite(D8, 1);
    Serial.println("D8 is Off..!");
  }
  Serial.println(led_1);
  Serial.println(led_2);
  Serial.println(led_3);
  Serial.println(led_4);
  Serial.println(led_5);
  Serial.println(led_6);
  Serial.println(led_7);
  Serial.println(led_8);
 
  delay(5000);
 
}
