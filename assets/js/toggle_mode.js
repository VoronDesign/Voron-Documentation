---
---
{% if site.toggle_color_scheme %}

  {% if site.toggle_auto_mode and site.toggle_auto_mode != "nil" %}
    {% assign toggle_auto_mode = site.toggle_auto_mode %}
  {% endif %}

  {% if site.toggle_text_1 %}
    {% assign toggle_text_1 = site.toggle_text_1 %}
  {% else %}
    {% assign toggle_text_1 = "-> Return to the Dark Side" %}
  {% endif %}

  {% if site.toggle_text_2 %}
    {% assign toggle_text_2 = site.toggle_text_2 %}
  {% else %}
    {% assign toggle_text_2 = "-> Color-Blind-Friendly Light Mode" %}
  {% endif %}

  const userPrefers = getComputedStyle(document.documentElement).getPropertyValue('content');	

  if (theme === "dark") {
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  } else if (theme === "light") {
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
  } else if  (userPrefers === "dark") {
    document.documentElement.setAttribute('data-theme', 'dark');
    window.localStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    window.localStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
  }

  {% if toggle_auto_mode %}

    let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 

    function prefersColorTest(systemInitiatedDark) {
      if (systemInitiatedDark.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');		
        document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_2 }}";
        window.localStorage.setItem('theme', '');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("theme-toggle").innerHTML = "{{ toggle_text_1 }}";
        window.localStorage.setItem('theme', '');
      }
    }

    systemInitiatedDark.addListener(prefersColorTest);
    
  {% endif %}

{% endif %}