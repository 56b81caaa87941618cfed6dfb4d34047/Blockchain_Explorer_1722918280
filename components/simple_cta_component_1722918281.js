/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722918281", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
                <div id="cta-title-container" class="flex mb-6">
                    <h2 id="cta-title" class="flex-1 text-4xl font-extrabold leading-tight tracking-tight text-white">Discover Celestial Blockchain Insights</h2>
                </div>

                <div id="cta-subtitle-container" class="flex mb-8">
                    <p id="cta-subtitle" class="flex-1 text-lg font-medium text-pink-100">Navigate the cosmic realm of blockchain with our otherworldly app, curating the most surreal trends and developments.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-purple-900 bg-pink-300 bg-opacity-70 hover:bg-opacity-90 focus:ring-4 focus:ring-pink-500 font-bold rounded-lg text-lg px-8 py-4 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">Explore Blockchain Galaxies</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
