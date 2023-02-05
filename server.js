const express=require("express");
// import express from "express";
const app=express();


const jsondata=require("./csvjson_last&final.json");
// import json from "./csvjson_last&final.json";

const fetch=require("node-fetch");
// globalThis.fetch = fetch;
const dotenv=require("dotenv");
const bp=require("body-parser");
app.use(bp.urlencoded({extended:true}));
const {PORT=3000}=process.env

dotenv.config({path:'./.env'})
app.set("view engine","ejs");

// var d;
// var d2;
// var c1;
// var c2;

app.get("/", function(req,res){
	var frontdata=jsondata;
	console.log(typeof(frontdata));
	res.render("demo",{fdata:frontdata});
});

app.post("/hello",async function(req,res){
	console.log("Target"+req.body.Target);
	console.log("Source"+req.body.Source);
	// var p=process(req.body.Target,req.body.Source);
	// console.log("type of p",typeof(p));
	// var [target,source]=process(req.body.Target,req.body.Source);
	// console.log("target:"+target+"\nsource:"+source);
	PPPCAL({target,source}=process(req.body.Target,req.body.Source),req.body.amount);
	// var response= await fetch(`https://v6.exchangerate-api.com/v6/8ec6b5690d95492d22fe1b0c/pair/${c1}/${c2}/1`);
	//var response= await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API}/pair/${c1}/${c2}/1`);


	// console.log(`https://v6.exchangerate-api.com/v6/8ec6b5690d95492d22fe1b0c/pair/${c1}/${c2}/1`)
	//var data =await response.json();
	//console.log("Conversion Rate:",data.conversion_result);
	//  console.log("Conversion Rate:");
	
	
	// console.log(f);
	// f1=f*req.body.amount;
	// console.log("PPP Conversion:",f1.toFixed(2));
	// res.send("conversion rate:",data.conversion_result);
	//res.send(`<h>conversion rate:${data.conversion_result}</h><br><h>PPP Conversion:${f1.toFixed(2)}</h>`);
	function process(Target,Source){
		var d;
		var d2;
		var c1;
		var c2;
		// console.log(Source);
		jsondata.forEach(function(data){
			if(data["Country_Name"]===Target){
				// console.log("test target:",data["Country_Name"]);
				d=data.PPP;
				c1=data["Currency_Code"];
			// console.log(d);
			};
			if(data["Country_Name"]===Source){
				// console.log("test Source:",data["Country_Name"]);
				d2=data.PPP;
				c2=data["Currency_Code"];
			console.log("source:"+d2);
			};
			// return[d,d2];
		});
		// console.log(d,d2);
		return{"target":d,"source":d2};
	}

	function PPPCAL(tar_sour,amount){
		var f=target/source;
		let f1=f*amount;
		console.log("PPP Conversion:",f1.toFixed(2));
		res.send(`<h>conversion rate:</h><br><h>PPP Conversion:${f1.toFixed(2)}</h>`);
	}
});

app.listen(PORT,function(){
    console.log("server started");
})