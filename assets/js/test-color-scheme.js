---
---

if (theme !== theme_html) {
    // local storage and html data-theme attribute are out of sync.
    if (testLocalStorage()) {
        localStorage.setItem('theme', theme_html);
        last_Savedmode = theme_html;
        if (theme === "dark") {
            document.documentElement.setAttribute('data-theme', 'dark');
            } else {
            document.documentElement.setAttribute('data-theme', 'light');
            }
	} else {
        console.log("window.localStorage for data-theme attribute is NOT AVAILABLE!");
        //set the data-theme in html header to match the last saved mode
        // apparently windows.localStorage is not always available.
        if (last_Savedmode !== undefined) {
            document.documentElement.setAttribute('data-theme', last_Savedmode);
        } else {
            document.documentElement.setAttribute('data-theme', '{{ site.color_scheme}}');
        }
        // try to save anyways because the window.localStorage.removeItem
        // could have thrown exeception even tho window.localStorage.setItem
        // worked
        try {
            localStorage.setItem('theme', theme_html);
            last_Savedmode = theme_html;
        } catch(e) {console.log("window.localStorage.setItem() threw an Exception!");}
    }
} else {
    //last_Savedmode = theme;
    if (theme === "dark") {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === "light") {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        {% if site.color_scheme != nil and site.color_scheme != 'nil' %} //site color as a value
            {% if site.toggle_color_scheme != nil and site.toggle_color_scheme != 'nil' %}
            // site color has a value and toggle color has a value
            // check to see which on is not dark or light
                {% if site.color_scheme == 'black' or site.color_scheme == 'white' %}
                    {% if site.toggle_color_scheme != 'black' and site.toggle_color_scheme != 'white' %}
                        document.documentElement.setAttribute('data-theme', '{{ site.toggle_color_scheme }}');
                    {% else %}
                        document.documentElement.setAttribute('data-theme', '{{ site.color_scheme }}');
                    {% endif %}
                {% else %}
                    {% if site.toggle_color_scheme == 'black' or site.toggle_color_scheme == 'white' %}
                        document.documentElement.setAttribute('data-theme', '{{ site.color_scheme }}');
                    {% else %}
                        document.documentElement.setAttribute('data-theme', '{{ site.color_scheme }}');
                    {% endif %}
                {% endif %}
            {% else %}
                document.documentElement.setAttribute('data-theme', '{{ site.color_scheme }}');
            {% endif %}
        {% elsif site.toggle_color_scheme != nil and site.toggle_color_scheme != 'nil' %}
                document.documentElement.setAttribute('data-theme', '{{ site.toggle_color_scheme }}');
        {% endif %}
    }
}