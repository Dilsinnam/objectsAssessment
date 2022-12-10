const ol = document.querySelector("ol");
const movies = [
    {
        name: "Cars",
        year: 2006,
        director: "John Lasseter",
        image: "https://m.media-amazon.com/images/I/811IcpNS05L.jpg"
    },
    {
        name: "Fast and Furious: Tokyo Drift",
        year: 2006,
        director: "Justin Lin",
        image: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_.jpg"
    },
    {
        name: "Rush Hour",
        year: 1998,
        director: "Brett Ratner",
        image: "https://upload.wikimedia.org/wikipedia/en/4/49/Rush_Hour_poster.png"
    }
];

const template = movies.map(movies => `
<li>
    <p>Name: ${movies.name}</p>
    <p>Year: ${movies.year}</p>
    <p>Director: ${movies.director}</p>
    <p> ${'<img src="'+movies.image+'">'}
</li>
    
`);
console.log(template);
ol.innerHTML = template.join('');