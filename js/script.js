{   

    const createResultList = (results) => {
        const $results = document.querySelector(`.results`);
        $results.innerHTML = results.map(createResultListItem).join(``);
    }

    const createResultListItem = result => `<li class="result" id="${result.id}">${result.name}</li>`;




    const parse = (results) => {
        createResultList(results);
    };

    const search = value => {
        const url = `https://musicdemons.com/api/v1/artist/autocomplete`;
        const options = {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
              },
            body: `name=${value}`
        };

        fetch(url, options)
        .then(response => response.json())
        .then(jsonData => parse(jsonData));
    };

    const handleKeyUpSearch = e => {
        const $input = e.currentTarget;
        search($input.value);
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}