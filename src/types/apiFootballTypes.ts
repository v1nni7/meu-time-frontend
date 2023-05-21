export interface Statistics {
  league: {
    id: number
    name: string
    country: string
    logo: string
    flag: string
    season: number
  }
  team: {
    id: number
    name: string
    logo: string
  }
  form: string
  fixtures: {
    played: {
      home: number
      away: number
      total: number
    }
    wins: {
      home: number
      away: number
      total: number
    }
    draws: {
      home: number
      away: number
      total: number
    }
    loses: {
      home: number
      away: number
      total: number
    }
  }
  goals: {
    for: {
      total: {
        home: number
        away: number
        total: number
      }
      average: {
        home: string
        away: string
        total: string
      }
      minute: {
        '0-15': {
          total: number | null
          percentage: string | null
        }
        '16-30': {
          total: number | null
          percentage: string | null
        }
        '31-45': {
          total: number | null
          percentage: string | null
        }
        '46-60': {
          total: number | null
          percentage: string | null
        }
        '61-75': {
          total: number | null
          percentage: string | null
        }
        '76-90': {
          total: number | null
          percentage: string | null
        }
        '91-105': {
          total: number | null
          percentage: string | null
        }
        '106-120': {
          total: number | null
          percentage: string | null
        }
      }
    }
    against: {
      total: {
        home: number
        away: number
        total: number
      }
      average: {
        home: string
        away: string
        total: string
      }
      minute: {
        '0-15': {
          total: number | null
          percentage: string | null
        }
        '16-30': {
          total: number | null
          percentage: string | null
        }
        '31-45': {
          total: number | null
          percentage: string | null
        }
        '46-60': {
          total: number | null
          percentage: string | null
        }
        '61-75': {
          total: number | null
          percentage: string | null
        }
        '76-90': {
          total: number | null
          percentage: string | null
        }
        '91-105': {
          total: number | null
          percentage: string | null
        }
        '106-120': {
          total: number | null
          percentage: string | null
        }
      }
    }
  }
  biggest: {
    streak: {
      wins: number
      draws: number
      loses: number
    }
    wins: {
      home: string
      away: string
    }
    loses: {
      home: string
      away: string
    }
    goals: {
      for: {
        home: number
        away: number
      }
      against: {
        home: number
        away: number
      }
    }
  }
  clean_sheet: {
    home: number
    away: number
    total: number
  }
  failed_to_score: {
    home: number
    away: number
    total: number
  }
  penalty: {
    scored: {
      total: number
      percentage: string
    }
    missed: {
      total: number
      percentage: string
    }
    total: number
  }
  lineups: {
    formation: string
    played: number
  }[]
  cards: {
    yellow: {
      '0-15': {
        total: number
        percentage: string
      }
      '16-30': {
        total: number
        percentage: string
      }
      '31-45': {
        total: number
        percentage: string
      }
      '46-60': {
        total: number
        percentage: string
      }
      '61-75': {
        total: number
        percentage: string
      }
      '76-90': {
        total: number
        percentage: string
      }
      '91-105': {
        total: number | null
        percentage: string | null
      }
      '106-120': {
        total: number | null
        percentage: string | null
      }
    }
    red: {
      '0-15': {
        total: number | null
        percentage: string | null
      }
      '16-30': {
        total: number | null
        percentage: string | null
      }
      '31-45': {
        total: number | null
        percentage: string | null
      }
      '46-60': {
        total: number | null
        percentage: string | null
      }
      '61-75': {
        total: number | null
        percentage: string | null
      }
      '76-90': {
        total: number | null
        percentage: string | null
      }
      '91-105': {
        total: number | null
        percentage: string | null
      }
      '106-120': {
        total: number | null
        percentage: string | null
      }
    }
  }
}
