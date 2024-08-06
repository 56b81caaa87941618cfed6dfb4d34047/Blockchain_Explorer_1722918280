/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722918281", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-opacity-50 backdrop-filter backdrop-blur-lg">
        <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-20 md:p-12 lg:p-16 rounded-lg shadow-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-md">
            <hr id="footer-divider" class="my-8 border-white border-opacity-20 sm:mx-auto lg:my-10">
            <div id="footer-content" class="text-center">
                <div class="flex">
                    <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white hover:text-pink-200 transition duration-300">
                        <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10" alt="Landwind Logo" />
                        BlockExplore - Discover the Blockchain
                    </a>
                </div>
            </div>
            <div class="flex">
                <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-80 hover:text-opacity-100 transition duration-300">
                    Stay ahead of the curve with BlockExplore. Our platform aggregates the latest blockchain news, insights, and data from trusted sources across the industry. Never miss a beat with our real-time updates and customizable alerts. Join the future of decentralized information today.
                </div>
            </div>
        </div>
    </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
