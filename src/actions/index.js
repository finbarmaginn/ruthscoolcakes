import axios from 'axios'

export function toggleViewer(src, isActive) {
  return {
    type: "TOGGLE_VIEWER",
    payload: {
      src: src,
      isActive: !isActive
    }
  }
}

export function formStatusClear() {
  return {
    type: "FORM_STATUS_CLEAR",
    payload: {
      sent: false,
      error: false,
      pending: false,
      response: {}
    }
  }
}
export function formDataClear() {
  return {
    type: "FORM_DATA_CLEAR",
    payload: {
      name: "",
      email: "",
      tel: "",
      contactTime: "",
      occasion: "",
      message: ""
    }
  }
}

export function nameChange(val) {
  return {
    type: "NAME_CHANGE",
    payload: {
      newValue: val
    }
  }
}
export function messageChange(val) {
  return {
    type: "MESSAGE_CHANGE",
    payload: {
      newValue: val
    }
  }
}
export function emailChange(val) {
  return {
    type: "EMAIL_CHANGE",
    payload: {
      newValue: val
    }
  }
}
export function telChange(val) {
  return {
    type: "TEL_CHANGE",
    payload: {
      newValue: val
    }
  }
}
export function timeChange(val) {
  return {
    type: "CONTACT_TIME_CHANGE",
    payload: {
      newValue: val
    }
  }
}
export function occChange(val) {
  return {
    type: "OCCASION_CHANGE",
    payload: {
      newValue: val
    }
  }
}

export function submitContact(data) {
  return {
    type: "SUBMIT_CONTACT",
    payload: axios.post('php/contact.php', data)
  }
}

export function getReviews() {
  return {type: "GET_REVIEWS", payload: axios.get('php/getReviews.php')}
}

export function appResize(newWidth, isNavMobile) {
  return {
    type: "APP_RESIZE",
    payload: {
      windowWidth: newWidth,
      isNavMobile: isNavMobile
    }
  }
}
export function tooltipOpacityFade(opacity) {
  return {
    type: "TOOLTIP_OPACITY",
    payload: {
      opacity: opacity
    }
  }
}
export function toggleTooltip(status) {
  return {
    type: "TOGGLE_TOOLTIP",
    payload: {
      tooltipActive: status
    }
  }
}
export function toggleInfo(status, title, text, cssClass) {
  return {
    type: "TOGGLE_INFO",
    payload: {
      infoActive: status,
      infoTitle: title,
      infoText: text,
      infoClass: cssClass
    }
  }
}

export function toggleNav(status) {
  return {
    type: "TOGGLE_NAV",
    payload: {
      isNavActive: status
    }
  }
}
