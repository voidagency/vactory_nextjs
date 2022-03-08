import React, { forwardRef } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"

const classes = {
  base: "inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary: "text-white bg-indigo-600 hover:bg-indigo-700",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
}

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      className,
      variant = "primary",
      size = "normal",
      pill,
      disabled = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      disabled={disabled}
      type={type}
      className={clsx(`
                ${classes.base}
                ${classes.size[size]}
                ${classes.variant[variant]}
                ${pill && classes.pill}
                ${disabled && classes.disabled}
                ${className}
            `)}
      {...props}
    >
      {children}
    </button>
  )
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  submit: PropTypes.oneOf(["submit", "button"]),
  className: PropTypes.string,
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "normal", "large"]),
}

export { Button }
