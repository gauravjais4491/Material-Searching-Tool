const data = `[
    {
        "Material_Name": "AISI 1059",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.87
    },
    {
        "Material_Name": "AISI 1060",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.66,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1065",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.7,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1070",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.75,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1075",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.8,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1080",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.88,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1084",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.93,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1085",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.95,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1086",
        "Young_Modulus": 200,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.93,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1090",
        "Young_Modulus": 205,
        "Poisons_Ratio": 0.29,
        "Percentage_Carbon": 0.98,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1095",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.03,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 1566",
        "Young_Modulus": 210,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.71,
        "Density": 7.85
    },
    {
        "Material_Name": "SAE 1572",
        "Young_Modulus": 210,
        "Poisson_Ratio": 0.3,
        "Percentage_Carbon": 0.76,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 4161",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 4161H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI E50100 ",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.1,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5060",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 50B60",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 50B60H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.65,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI E51100",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 1.1,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5155",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.59,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5155H",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.6,
        "Density": 7.85
    },
    {
        "Material_Name": "AISI 5160",
        "Young_Modulus": 205,
        "Poisson_Ratio": 0.29,
        "Percentage_Carbon": 0.64,
        "Density": 7.85
    }
]`


const data1 = `[
    {
        "Material Name": "AISI 409",
        "Young's Modulus": 206,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.5,
        "Density": 7.85
    },
    {
        "Material Name": "SCM 435",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.38,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1030",
        "Young's Modulus": 206,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.34,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1034",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.38,
        "Density": 7.87
    },
    {
        "Material Name": "AISI 1035",
        "Young's Modulus": 196,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.38,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1038",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.42,
        "Density": 7.845
    },
    {
        "Material Name": "AISI 1040",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.44,
        "Density": 7.845
    },
    {
        "Material Name": "AISI 1042",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.47,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1043",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.47,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1045",
        "Young's Modulus": 206,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.5,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1049",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.53,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1050",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.55,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1055",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.6,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1536",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.37,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1132",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.34,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1139",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.43,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1137",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.39,
        "Density": 7.87
    },
    {
        "Material Name": "AISI 1140",
        "Young's Modulus": 210,
        "Percentage Carbon": 0.44,
        "Density": 8.03
    },
    {
        "Material Name": "AISI 1141",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.45,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1144",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.45,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1146",
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.49,
        "Density": 7.87
    }
]`

const data2 = `[
    {
        "Material Name": "AISI 304",
        "Young's Modulus": 193,
        "Poison's Ratio": 0.265,
        "Percentage Carbon": 0.07,
        "Density": 8
    },
    {
        "Material Name": "ASTM A815",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.3,
        "Percentage Carbon": 0.03,
        "Density": 7.805
    },
    {
        "Material Name": "AISI 316L",
        "Young's Modulus": 193,
        "Poison's Ratio": 0.25,
        "Percentage Carbon": 0.03,
        "Density": 8
    },
    {
        "Material Name": "AISI 1005",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.06,
        "Density": 7.872
    },
    {
        "Material Name": "SAE AISI 1008",
        "Young's Modulus": 190,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.1,
        "Density": 7.872
    },
    {
        "Material Name": "SAE AISI 1012",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.15,
        "Density": 7.87
    },
    {
        "Material Name": "SAE AISI 1015",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.18,
        "Density": 7.87
    },
    {
        "Material Name": "SAE AISI 1018",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.2,
        "Density": 7.87
    },
    {
        "Material Name": "SAE AISI 1020",
        "Young's Modulus": 186,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.23,
        "Density": 7.87
    },
    {
        "Material Name": "SAE AISI 1022",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.23,
        "Density": 7.868
    },
    {
        "Material Name": "AISI 1023",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.25,
        "Density": 7.858
    },
    {
        "Material Name": "SAE AISI 1025",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.28,
        "Density": 7.858
    },
    {
        "Material Name": "AISI 1026",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.28,
        "Density": 7.858
    },
    {
        "Material Name": "SAE AISI 1029",
        "Young's Modulus": 210,
        "Poison's Ratio": 0.3,
        "Percentage Carbon": 0.31,
        "Density": 8.03
    },
    {
        "Material Name": "AISI 1108",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.13,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1110",
        "Percentage Carbon": 0.13
    },
    {
        "Material Name": "AISI 1116",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1117",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1118",
        "Young's Modulus": 205,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.2,
        "Density": 7.85
    },
    {
        "Material Name": "AISI 1119",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.2,
        "Density": 7.87
    },
    {
        "Material Name": "AISI 1211",
        "Young's Modulus": 200,
        "Poison's Ratio": 0.29,
        "Percentage Carbon": 0.13,
        "Density": 7.87
    }
]`

const HCS = JSON.parse(data);

function search() {
    // const sheet = (metals == "hcs") ? data : (metals == "mcs") ? data1 :data2;
    var mod = document.getElementById('modulus').value;
    var den = document.getElementById('density').value;
    var rate = document.getElementById('ratio').value;
    var crbn = document.getElementById('carbon').value;

    HCS.map((item) => {
        if (item.Density <= den || item["Young_Modulus"] <= mod || item["Percentage_Carbon"] <= crbn || item["Poisson_Ratio"] <= rate) {
            var material = document.createElement('ul');
            var name = document.createElement('li');
            var modulus = document.createElement('li');
            var ratio = document.createElement('li');
            var density = document.createElement('li');
            var carbon = document.createElement('li');
            name.innerText = `Material_Name : ${item['Material_Name']}`;
            material.appendChild(name);
            modulus.innerText = `Young_modulus : ${item['Young_Modulus']}`;
            material.appendChild(modulus);
            ratio.innerText = `Poisson_Ratio : ${item['Poisson_Ratio']}`;
            material.appendChild(ratio);
            density.innerText = `Density : ${item.Density}`;
            material.appendChild(density);
            carbon.innerText = `Percentage_Carbon : ${item['Percentage_Carbon']}`;
            material.appendChild(carbon);
            document.getElementById("outputs").appendChild(material);
        }
    });
}

