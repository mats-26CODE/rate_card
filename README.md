A Simple Rate Card

Installation

Install using npm install @mats_/react-rate-card

Usage

In a React app, use the Rate Card Component as follows:

import { RateCard } from '@mats_/react-rate-card'

[Card Styling Props]

Name                   Description

cardBackgroundColor    hex | rgba() | name 

cardSpacing            {number} -> renders as pixels

cardFontStyle          'String' -> example 'Ubuntu'

cardGradient           'boolean' -> if true, then also specify below props

gradientType           'linear-gradient' (only supports linear-gradient for now)

gradientDirection      'left | right | bottom-left | bottom-right | top-left | top-right '

gradientColorOne       'hex | rgba() | name'

gradientColorTwo       'hex | rgba() | name'

