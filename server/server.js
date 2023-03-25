const express=require("express");
const app=express();
const cors=require("cors");
const jsondata=require("./csvjson_last&final.json");
const fetch=require("node-fetch");
const dotenv=require("dotenv");
const bp=require("body-parser");
const bodyParser = require("body-parser");

app.use(bp.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
dotenv.config({path:'./.env'})
const api=process.env.API;
app.set("view engine","ejs");


app.get("/", function(req,res){
	var frontdata=jsondata;
	res.render("demo",{fdata:frontdata});
});

app.post("/PPP",function(req,res){

	PPPCAL({target,currencycode_target,t_name,source,currencycode_source,s_name}=process(req.body.target,req.body.source),req.body.amount);
	
	function process(Target,Source){
		var d=0;
		var d2=0;
		var c1="";
		var c2="";
		jsondata.forEach(function(data){
			if(data["Country_Name"]===Target){
				d=data.PPP;
				c1=data["Currency_Code"];
			};
			if(data["Country_Name"]===Source){
				d2=data.PPP;
				c2=data["Currency_Code"];
			};
		
		});
		return{"target":d,"currencycode_target":c1,"t_name":Target,"source":d2,"currencycode_source":c2,"s_name":Source};
	}

	async function PPPCAL(tar_sour,amount){
		if(source && target){
			var f=target/source;
			let f1=f*amount;
			
			var response= await fetch(`https://v6.exchangerate-api.com/v6/${api}/pair/${currencycode_target}/${currencycode_source}/${f1}`);
			var data =await response.json();
			
			let t=data.conversion_result/amount;
			res.json({PPP:f1.toFixed(2),
				Currency:data.conversion_result.toFixed(2),
				src:currencycode_source,
				trg:currencycode_target,
				tname:t_name,
				sname:s_name,
				a:amount,
				times:t.toFixed(2)})
			
		}else{
			console.log("entered");
			data={m1:'No PPP data available for this country please Try with some other country'};
			res.send({message:data.m1});
		}
	}
});

app.post("/Currency",(req,res)=>{
	PPPCAL({target,currencycode_target,source,currencycode_source}=process(req.body.target,req.body.source),req.body.amount);

	function process(Target,Source){
		var d=0;
		var d2=0;
		var c1="";
		var c2="";
		jsondata.forEach(function(data){
			if(data["Country_Name"]===Target){
				c1=data["Currency_Code"];
			};
			if(data["Country_Name"]===Source){
				c2=data["Currency_Code"];
			};
		
		});
		return{"currencycode_target":c1,"currencycode_source":c2};
	}

	async function PPPCAL(tar_sour,amount){
		if(currencycode_source && currencycode_target){
			var response= await fetch(`https://v6.exchangerate-api.com/v6/${api}/pair/${currencycode_source}/${currencycode_target}/${amount}`);
			var data =await response.json();
			res.json({Currency:data.conversion_result,s_code:currencycode_source,t_code:currencycode_target,a:amount})
		}else{
			res.json("No data available for this country please Try with some other country")
		}
	}
})

app.listen(process.env.PORT,function(){
    console.log("server started");
})