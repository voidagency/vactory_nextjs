import React, { PureComponent } from "react"

function scrollToY(scrollTargetYY, speedd, easingg) {
  const scrollY = window.scrollY || document.documentElement.scrollTop
  const scrollTargetY = scrollTargetYY || 0
  const speed = speedd || 2000
  const easing = easingg || "easeOutSine"
  let currentTime = 0

  const time = Math.max(
    0.1,
    Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8)
  )

  const easingEquations = {
    easeOutSine: (pos) => Math.sin(pos * (Math.PI / 2)),
    easeInOutSine: (pos) => -0.5 * (Math.cos(Math.PI * pos) - 1),
    easeInOutQuint: (pos) => {
      let newPos = pos
      newPos /= 0.5
      if (newPos < 1) {
        return 0.5 * newPos ** 5
      }
      return 0.5 * (newPos - 2) ** 5 + 2
    },
  }

  function tick() {
    currentTime += 1 / 60

    const p = currentTime / time
    const t = easingEquations[easing](p)

    if (p < 1) {
      window.requestAnimFrame(tick)

      window.scrollTo(0, scrollY + (scrollTargetY - scrollY) * t)
    } else {
      window.scrollTo(0, scrollTargetY)
    }
  }

  tick()
}

class BaseBackToTop extends PureComponent {
  state = {
    isAtRange: false,
  }

  componentDidMount = () => {
    window.requestAnimFrame = (() => {
      const clb = (callback) => {
        window.setTimeout(callback, 1000 / 60)
      }

      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        clb
      )
    })()

    let lastScrollTop = 0

    window.addEventListener(
      "scroll",
      () => {
        const st = window.pageYOffset || document.documentElement.scrollTop

        const backToTop = document.querySelector(".back-to-top")

        const showAt = this.props.showAt || 1000

        if (st > showAt) {
          this.setState({ isAtRange: true })
        } else {
          this.setState({ isAtRange: false })
        }

        if (this.props.showOnScrollUp) {
          if (st > lastScrollTop) {
            backToTop.style.opacity = 0
            backToTop.style.visibility = "hidden"
          } else if (this.state.isAtRange) {
            backToTop.style.opacity = 1
            backToTop.style.visibility = "visible"
          } else {
            backToTop.style.opacity = 0
            backToTop.style.visibility = "hidden"
          }
        } else if (this.state.isAtRange) {
          backToTop.style.opacity = 1
          backToTop.style.visibility = "visible"
        } else {
          backToTop.style.opacity = 0
          backToTop.style.visibility = "hidden"
        }

        lastScrollTop = st <= 0 ? 0 : st
      },
      false
    )
  }

  moveToTop = () => {
    // this.props.onClick ? this.props.onClick() : null;
    scrollToY(this.props.scrollTo, this.props.speed, this.props.easing)
  }

  render() {
    return (
      <button
        className={"back-to-top " + (this.props.className ?? "")}
        onClick={this.moveToTop}
        style={this.props.style}
      >
        {this.props.children || "UP"}
      </button>
    )
  }
}

export { BaseBackToTop }
