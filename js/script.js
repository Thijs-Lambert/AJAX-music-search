{

    const search = value => {
        const url = ` `;

    };

    const handleKeyUpSearch = e => {
        if (e.keyCode === 13) {
            const $input = e.currentTarget;
            search($input.value);
        }
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}