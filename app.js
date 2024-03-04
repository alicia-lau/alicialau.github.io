// Define components for different sections of the resume
Vue.component('header-component', {
    template: '<header><h1>{{ name }}</h1></header>',
    data: function () {
        return {
            name: 'Your Name'
        }
    }
});

Vue.component('about-component', {
    template: '<section><h2>About Me</h2><p>{{ aboutText }}</p></section>',
    data: function () {
        return {
            aboutText: 'A brief introduction about yourself.'
        }
    }
});

Vue.component('experience-component', {
    template: '<section><h2>Experience</h2><ul><li v-for="job in jobs">{{ job.title }} at {{ job.company }}</li></ul></section>',
    data: function () {
        return {
            jobs: [
                { title: 'Job Title 1', company: 'Company 1' },
                { title: 'Job Title 2', company: 'Company 2' }
            ]
        }
    }
});

Vue.component('education-component', {
    template: '<section><h2>Education</h2><ul><li v-for="school in schools">{{ school.name }}</li></ul></section>',
    data: function () {
        return {
            schools: [
                { name: 'School Name 1' },
                { name: 'School Name 2' }
            ]
        }
    }
});

Vue.component('contact-component', {
    template: '<section><h2>Contact</h2><p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a></p></section>'
});

new Vue({
    el: '#app'
});
