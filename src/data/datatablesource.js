export const userColumns = [{ field: 'id', headerName: 'ID', width: 70 }, {
        field: "user", headerName:"User", width: 150, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"/>
                    {params.row.username}
                </div>
            )
        }
    },
    {
        field: "email", 
        headerName:"Email", 
        width: 230,
    },
    {
        field: "age", 
        headerName:"Age", 
        width: 30,
    },
    {
        field: "status", 
        headerName:"Status", 
        width: 160,
        renderCell:(params) => {
            return(
                <div className={`cellWithStatus`}>
                    <span className={`statusText ${params.row.status}`}>
                        {params.row.status}
                    </span>
                </div>
            )
        }
    },
];


export const userRows = [
    {
        id: 1,
        username:"Snow",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "active",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 2,
        username:"Jhon",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "passive",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 3,
        username:"Bill",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "pending",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 4,
        username:"Max",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "active",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 5,
        username:"Shaman",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "pending",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 6,
        username:"Meladze",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "active",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 7,
        username:"Agutin",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "active",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 8,
        username:"Rozenbaum",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "passive",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 9,
        username:"Shishkovizkiy",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "active",
        email: "popkadruga@mail.com",
        age: "34",
    },
    {
        id: 10,
        username:"Didulya",
        img: "https://avatars.dzeninfra.ru/get-zen_doc/2804475/pub_637cee37f1bc9c18069108dc_637d1e3896aba95cd2217367/scale_1200",
        status: "passive",
        email: "popkadruga@mail.com",
        age: "34",
    },
];