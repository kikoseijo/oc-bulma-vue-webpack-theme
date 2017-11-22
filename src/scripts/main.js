import Vue from 'vue'
import Buefy from 'buefy'

// require('buefy/lib/buefy.css');

import KsFields from './components/buefy/fields.vue'
import KsIcon from './components/buefy/icon.vue'
import KsMenu from './components/buefy/menu.vue'
import KsModal from './components/buefy/modal.vue'
import KsNotifications from './components/buefy/notifications.vue'
import KsPagination from './components/buefy/pagination.vue'
import KsDropdown from './components/buefy/dropdown.vue'
import KsTabs from './components/buefy/tabs.vue'

import KsCard from './components/bulma/card.vue'

import KsExamples from './components/examples.vue'

var $ = window.$ = window.jQuery = require('jquery')
var Clipboard = require('clipboard')

$(document).ready(function () {
  Vue.filter('pre', (text) => {
    if (!text) return
    text = text.replace(/^\s*[\r\n]/g, '')
    const whitespaces = /^[ \t]*./.exec(text).toString().slice(0, -1)
    let newText = []
    text.split(/\r\n|\r|\n/).forEach((line) => {
      newText.push(line.replace(whitespaces, ''))
    })
    newText = newText.join('\r\n')
    return newText
  })

  Vue.directive('highlight', {
    deep: true,
    bind (el, binding) {
      // On first bind, highlight all targets
      const targets = el.querySelectorAll('code')
      for (const target of targets) {
        // if a value is directly assigned to the directive, use this
        // instead of the element content.
        if (binding.value) {
          target.innerHTML = binding.value
        }
        hljs.highlightBlock(target)
      }
    },
    componentUpdated (el, binding) {
      // After an update, re-fill the content and then highlight
      const targets = el.querySelectorAll('code')
      for (const target of targets) {
        if (binding.value) {
          target.innerHTML = binding.value
          hljs.highlightBlock(target)
        }
      }
    }
  })

  Vue.use(Buefy, {
    defaultIconPack: 'fa',
    defaultSnackbarDuration: 2500
  })

  const app = new Vue({
    el: '.oc-bulma-app',
    data: {
      isMsgActive: true,
      isNotifActive: true,
      isLoading: false
    },
    components: { KsCard, KsFields, KsTabs, KsNotifications, KsIcon, KsMenu, KsModal, KsPagination, KsDropdown },
    methods: KsExamples
  })
})

$(document).ready(function () {
  $('#ct-btn-scroll').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()
      var hash = this.hash
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash
      })
    }
  })

  setInterval(function () {
    $('#ct-btn-scroll>.icon').toggleClass('bounce')
  }, 3000)

  // Dropdowns
  var $metalinks = getAll('#meta a')

  if ($metalinks.length > 0) {
    $metalinks.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.preventDefault()
        var target = $el.getAttribute('href')
        var $target = document.getElementById(target.substring(1))
        $target.scrollIntoView(true)
        // window.history.replaceState(null, document.title, `${window.location.origin}${window.location.pathname}${target}`);
        return false
      })
    })
  }

  // Dropdowns

  var $dropdowns = getAll('.dropdown:not(.is-hoverable)')

  if ($dropdowns.length > 0) {
    $dropdowns.forEach(function ($el) {
      $el.addEventListener('click', function (event) {
        event.stopPropagation()
        $el.classList.toggle('is-active')
      })
    })

    document.addEventListener('click', function (event) {
      closeDropdowns()
    })
  }

  function closeDropdowns () {
    $dropdowns.forEach(function ($el) {
      $el.classList.remove('is-active')
    })
  }

  // Toggles

  var $burgers = getAll('.burger')
  if ($burgers.length > 0) {
    $burgers.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        $el.classList.toggle('is-active')
        $target.classList.toggle('is-active')
      })
    })
  }

  // Modals

  var $html = document.documentElement
  var $modals = getAll('.modal')
  var $modalButtons = getAll('.modal-button')
  var $modalCloses = getAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button')

  if ($modalButtons.length > 0) {
    $modalButtons.forEach(function ($el) {
      $el.addEventListener('click', function () {
        var target = $el.dataset.target
        var $target = document.getElementById(target)
        $html.classList.add('is-clipped')
        $target.classList.add('is-active')
      })
    })
  }

  if ($modalCloses.length > 0) {
    $modalCloses.forEach(function ($el) {
      $el.addEventListener('click', function () {
        closeModals()
      })
    })
  }

  document.addEventListener('keydown', function (event) {
    var e = event || window.event
    if (e.keyCode === 27) {
      closeModals()
      closeDropdowns()
    }
  })

  function closeModals () {
    $html.classList.remove('is-clipped')
    $modals.forEach(function ($el) {
      $el.classList.remove('is-active')
    })
  }

  // Clipboard

  function makeHighlights () {
    var $highlights = getAll('.highlight')
    var itemsProcessed = 0

    if ($highlights.length > 0) {
      $highlights.forEach(function ($el) {
        var copy = '<button class="copy">Copy</button>'
        var expand = '<button class="expand">Expand</button>'
        $el.insertAdjacentHTML('beforeend', copy)

        if ($el.firstElementChild.scrollHeight > 480 && $el.firstElementChild.clientHeight <= 480) {
          $el.insertAdjacentHTML('beforeend', expand)
        }

        itemsProcessed++
        if (itemsProcessed === $highlights.length) {
          addHighlightControls()
        }
      })
    }
  }
  function addHighlightControls () {
    var $highlightButtons = getAll('.highlight .copy, .highlight .expand')

    $highlightButtons.forEach(function ($el) {
      $el.addEventListener('mouseenter', function () {
        $el.parentNode.style.boxShadow = '0 0 0 1px #ed6c63'
      })

      $el.addEventListener('mouseleave', function () {
        $el.parentNode.style.boxShadow = 'none'
      })
    })

    var $highlightExpands = getAll('.highlight .expand')

    $highlightExpands.forEach(function ($el) {
      $el.addEventListener('click', function () {
        $el.parentNode.firstElementChild.style.maxHeight = 'none'
      })
    })
  }

  setTimeout(() => {
    makeHighlights()
  }, 10 * 400)

  new Clipboard('.copy', {
    target: function target (trigger) {
      return trigger.previousSibling
    }
  })

  // Functions

  function getAll (selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector), 0)
  }

  var latestKnownScrollY = 0
  var ticking = false

  function scrollUpdate () {
    ticking = false
    // do stuff
  }

  function onScroll () {
    latestKnownScrollY = window.scrollY
    scrollRequestTick()
  }

  function scrollRequestTick () {
    if (!ticking) {
      requestAnimationFrame(scrollUpdate)
    }
    ticking = true
  }

  window.addEventListener('scroll', onScroll, false)
})
