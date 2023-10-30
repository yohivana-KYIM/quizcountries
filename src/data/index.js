const DATA = [
  {

    //capitale Afghanistan


    text: "Quelle est la capitale du  Afghanistan ?",
    options: [
      {
        text: "Tirana",
        isCorrect: false,
      },
      {
        text: "Brazzaville",
        isCorrect: false,
      },
      {
        text: "Mariehamn",
        isCorrect: false,
      },
      {
        text: "Kabul",
        isCorrect: true,
      },
    ],
  },

 //capitale Åland Islands
  {
    text: "Quelle est la capitale du  Åland Islands ?",
    options: [
      {
        text: "Sana'a",
        isCorrect: false,
      },

      {
        text: "Mariehamn",
        isCorrect: true,
      },
      {
        text: "Lusaka",
        isCorrect: false,
      },
      {
        text: "Harare",
        isCorrect: false,
      },
      
    ],
  },

  //capitale  Albania
  {
    text: "Quelle est la capitale du  Albania ?",
    options: [
      {
        text: "Pago Pago",
        isCorrect: false,
      },

     
      {
        text: "Luanda",
        isCorrect: false,
      },

      {
        text: "Tirana",
        isCorrect: true,
      },
      {
        text: "Algiers",
        isCorrect: false,
      },
      
    ],
  },

//capitale  Algeria
  {
    text: "Quelle est la capitale du  Algeria ?",
    options: [
      {
        text: "Saint John's",
        isCorrect: false,
      },

     
      {
        text: "Argentina",
        isCorrect: false,
      },

      {
        text: "The Valley",
        isCorrect: false,
      },
      {
        text: "Algiers",
        isCorrect: true,
      },
      
    ],
  },

//capitale   American Samoa
  {
    text: "Quelle est la capitale du  American Samoa ?",
    options: [
      {

        
          text: "Pago Pago",
          isCorrect: true,
        },
        {
        text:"Andorra la Vella",
        isCorrect: false,
      },

     
      {
        text: "The Valley",
        isCorrect: false,
      },

      {
        text: "Buenos Aires",
        isCorrect: false,
      },
      
    ],
  },

  //le nom de le symbole   du Afghanistan 
  {
    text: "Quel est le nom de le symbole du Afghanistan ? ?",
    options: [
      {
        text: "د.ج",
        isCorrect: false,
      },
      {
        text: "L",
        isCorrect: false,
      },
      {
        text: "€",
        isCorrect: false,
      },
      {
        text: "؋",
        isCorrect: true,
      },
    ],
  },


   //le nom dela  région se trouve le  Afghanistan
   
  {
    text: "Dans quelle région se trouve le  Afghanistan?",
    options: [
      {
        text: "EU",
        isCorrect: false,
      },
      {
        text: "AS",
        isCorrect: true,
      },
      {
        text: "AF",
        isCorrect: false,
      },
    ],
  },
// la capitale du  American Samoa 
  
  {
    text: "Quelle est la capitale du  American Samoa ?",
    options: [
      {

        
          text: "Pago Pago",
          isCorrect: true,
        },
        {
        text:"Andorra la Vella",
        isCorrect: false,
      },

     
      {
        text: "The Valley",
        isCorrect: false,
      },

      {
        text: "Buenos Aires",
        isCorrect: false,
      },
      
    ],
  },


//   

{
  text: "Quelle est la capitale du  American Samoa ?",
  options: [
    {

      
        text: "Pago Pago",
        isCorrect: true,
      },
      {
      text:"Andorra la Vella",
      isCorrect: false,
    },

   
    {
      text: "The Valley",
      isCorrect: false,
    },

    {
      text: "Buenos Aires",
      isCorrect: false,
    },
    
  ],
},







  // À quoi ressemble le drapeau du pays 
  {
   
    text: "À quoi ressemble le drapeau du pays ?",
    options: [
      {
        img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISERUSEhIWFRUWFRUVFRUXFRUYGBUVFhcXFhUVFxgYHSggGBolHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYtLy0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKkBKgMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQMEBQYHAgj/xAA8EAABAwIEBAQFAgUEAQUBAAABAAIRAyEEBRIxBkFRYRMicYEHMpGh8BSxI0JS0eEzcsHxYjSCg5KjFf/EABsBAAEFAQEAAAAAAAAAAAAAAAABAgMEBQYH/8QANBEAAQMCBAMHAwMFAQEAAAAAAQACEQMhBBIxQQVRYRNxgZGx0fAiocEUMuEGI0Jy8WIk/9oADAMBAAIRAxEAPwDaUaJBPUKNBEjQlRoIkaEIIIIIQgjRIIQggjQQlRoIkaRCCCErkpUI5RFGiKEi4KCCCckQQQQCEI5XYK4XQSJV3KC5ldBNSoI0SNCEESNBIhEjRIJUI0EEEIRI0ESRCNBBBCEgjRIJyajQRI0IRoIkEJUaNEghCNBBBCEaCJBCEEEEaEqNco0EIQRFGuXFCRclBcF46ohVb1CYa9IWLh5hLldySiCIFGpAZEhIjQCCIISJRGFzKIPHUJpTglEAiRhEIRoIkEIQQRIIQjRokEIRoIIkIRokEEISKCCCVNQQQQQhBGiRoQjQQCJCVGjXKNCEEEaJCEEaJGhCNcoEppjMdSpwaj2s1GGhxA1HooqtYMHz1+dAnsY55ge6UxOKaxrnuIa1oJLjsANyqJjfiNSFTTRpl4kAvdYQTctAJj3hQPFOf1MS803zTDSS1rSdJby1R80i87XVbbhRH1HqsWrinPOvz53nquvwHBKTGZsQJJ22HiNeesdCp7E8a45znEPDRJADWhum9txM+6UwfF+MpOaalTUILiHgXF9NwOdgq5h6kOIkbE3E3gg+8g/Vc1KznEExM29AZuPU/ZQ5zzK1zg6B+ns2x3D2n7q+ZV8RneIG16Y0kxLJBHe5uPdaFhMWyo3Ux7XN6tIInnssAfh5tuT91M5RxPVwTQylDhqDqhMkE7aZ5NA5jmpqOIcw2Pz8/IIWVj+C0qwBoCHctj1k6enRbcoDPOJadA+G3zVD9G+q4p594uAdiKAJOhx0j5mub8zR3HL2WSYPMjUrF77yfWByA6q3iMeRT+j93p82KxMDwp1Wo7tRZtiN55LTcJjqlUy909uX0VgwjZ2VUyV4IBH7QrVlrlygxFSriQ17iU/EsDJDRCfAxzSrXKKzXHtYdM3sY7ExP2SuAxYctajxIUMR2LtNtYWeaWZuZSaC5C6XTNcHCQqhELlAI0E5IjRokaEqCCCCEIkEESEJJBBBKmoIIIIQjCCCRfWHK6irV6dEZqhj5sN/BOawu0S6JNjVKTqYkNBLjYLMfxqiDYH0Uww7inq5dWaN3R7qu1sa953hvIf3SJcsqv8A1PBilT8SfxCtt4ef8neSsoxVP+oJVpB2MrP+JM1qYem1zBu+HOIkMHf1NlYMhx7nUmudGoiTGylw3HqrgH1mNDCYkEyPAzby9JZUwjW2abqwo1yxwIkLpdM1wcJGioxC4J67ASVi3EOZVMViXPeSG6oYP6WBxAj6StfzNhdRrNaYcabg099J5rHKWHDXFoe1xNvLJE+pssLHVPqvzP2MfjzJXV/06xrQ+pvAHcDJJ6fwU2rYYwCeQgG+w5FIVXQ0xadx07gqxUsLLYPzEGB0MWNt+SrQaBX01AQNXmgi3mg32WfTqB5IGy3sLiqeJc9rTOXWPxz5Tzsu6GT4h7RVDPL55dNoY3USeYtPvHZNzSI3tHXf6fm61rKH4cPqANZoDQNIbZwbDnPLdh1PtuqvxdhGOc2lh6LQ2SHQLky0Emb26qw5zQwPzCJI8plUKPGBVqZSIHOwECSZncdLKoNYXWBgRBPWbH/pJ1aOkRP+U9GWVAJI02MgxNtzBuka0hu5/OqYHA6FaLKzHk5HAwYteD4b9FonwwJ/Svbo0xUF5PnJaJsduQss0zCn+mxtansGVamkdGl0t+xCuHwtrP8A1FRsks0EuJ2DpEKlfEeuGZriP/jP/wCbFOGl7w3/AMn7ER1/yKyQ4UMfUBNnAHzjXVW/I84MAEj6LQMnxYI3Xn/DZ1pvMAC8c1I4L4g4xjwylTEkSGuaSSAJ69ASs9/C63aZ6QFvBU+I9lz1Wt8V8OPxGJp1mus1oETza7ULEQRspTLaLmNAO6ieEeK/1LAKgDanMA2t2Nx1U/icbTZfUPzZQ46k4viocpbeO/cEa94+yxmWBgfPwpSm7bulFXMkzQV65DTZrST0BmIHVWJxgSeS6jhlU1aGYiLwJ8L+cqtiaZpvynWECYTDEZtTZ1Ppt9VC5tm5eYaYaPv3Ki3Onv63WPjuPlrsmHA/2N57h+SrNHBSJf5Kw0OKKD7MOoyRbqNxsnrc1bMQVWaNNgAAaB6CIPVPKJPqsqp/UGMn6D5hv4AUwwdMD6tfFWenWDtilVD4X9lI0qs2O66Lh3Fu3htUAOOkaH26c1Qq0cuiXRI0S21AkUEEEqaguHvAElG5wAk7BM9ZcdR9h0Co47GjDMtdx0H5PT1UtKmXnou3PLt/ogAiC4q1IXJ1apcS+oZPz5CvNbsEljcWGBQlXGGpHSUx4mx8TdM8gxQdSmbhzh+fVZ9VzqjM+yvUaQaJU9VOy4DkgK0hcPrQFSykqwAlsXhWVabqTxLXiCO3bvzSHChLafglwcaRLSRzAMfvZK4bESLCTuucpwg8R1QEtL3y4b26CeXdW6Qim8P0MR/sN/LVVK72gxurJleL8xYeeyllAZngHuaH0XaKrbjo6OR6eqz7FcQYgVHMqucHtMOBJkELpeH49+Godk9pcRpeLH2M7Kt+kGIdmYQOY6rVXu85b1H2iFlwwDqTnteGhzariIuLbEE/VHhOI6heB4kHkZ7ggd/+09xOIdVcXvu47mAOVjb0VPFVu2mxFyfA7efqitXqYIGiD+4NM3B+k2gpgx8ObJkLh4pGqHaRMGRFjM7jabzKRxQLCB2Md7rl3yhw3G/cc1UyxfnZZ9HEVKU9mSJEGOXz+FJU8VB8p6z6dEn4ha2ft90zoVgW3mYJ/wAIqVRxuBtsZsmdmoS6wEpXFt1NfuHEdY5bX5dVV31XPgNbq5SAZk2iOvbspzFNdpc8fPy6em4CsfBmU+FRFV+g1KvmJEyGm7Q49Zk/3VulUFKkXG9/ngul4PjmYfCOJIJzWbP1d5tpG9/NLcBZO/C0alSrIdUA0sO7WjcuHKSduUBYl8Qcd4mZ4l428QN/+jGsP7L0hhsQAC03m3ZYzkPAHi4ypUxZJZ+oqw3bxQKhAc4/0nfureDxdIPOIe6wbGWLgkgnvmPBUcTi31nl7tSfCIgAd3iq5wllnjy97HOa03mm40yOR1DoRfstMynhdmJdSxcaXU2uYDydILRMbgAn6q9YTDMZpY0BrWiGgAAAAbACwCdGkKflDQGmXWFrmSbdzKircQdVaa1O0GOcA+5gKi9pe+Xnbmszr5fXy4NY46mvq6mVBJkgAaL7WG3NSuGxhgF583O83Ow+n7q7Y3BU8RT8OoJEgi8EEcwRzus+z7AuwlZrC6Wls03E3JEAz1It9k3FUzXaKmvVRvc9pMmyl8FmBpgimYn5o59kpiOIK7mlmqzhe14iPYeir9LEgC59/VMuJM0NOl5WuIdA1tjSJtBJ69uqrUDXzCmxxvbW1/8ApSB2ZwMx1+SpvC40HnPdSDaoVBy3NRsDBFj2Pop/C42RuocRgywkLoxBEtMjmrNQqXUlh3Kt4XFKcwr7BZdanCHBTWGdFk/G3dRVB1+5UnSfP56rRwDg4Fvz/uizqwgynlN0hdJDDm5CXXc4Ksa1Frzroe8WWe9sFIoIkTnQJPK6t96iTHHVZcGD1P8AZdtTHDu1OLjzKetK4aviTiKzqh307tvfxWk1uVsLp5TDE1ITus6yhM0xGlpP0WdjHXDAp6Q3VM4sxnmIUDw/n7abzRc4AvMtv/NsR72+ibcR4mpWqObTnTMF/MnnHbuq67KNNz9VuYbCU+xyVDr5/OinD3AyFrDcfZNq2Nceap+XZpUDQ14JA2PMjuOfqrBkb/FdqNmshzj+w94VGphOyknZWe2ZEq2YM6WhvOBPrzUhgnSVE03c+qlMLaFRqtLWiVkPnNJ3VjY6ypfHvDxrD9RRH8Roh7R/O0bf+4fcW6Ky0cQu3fKehVhmIkgtSU6jqZlqxnC+VzagcQWnYtsH7lrr7RPTdWWjjWPlwv6XTTjHDNpuL27u3t83KSVG8K4Z1Rxf8rQYj+p0c56SFofuZ2h2+R7LPx1WrWqXuNtLDlaNCp7MGa2CB5gf7bHomrcKbarD8+yeZvmLcK0FzHPLjpEc3H5Z6XS1PNmeY1aTqbWgeYi5BLgbDkBBn9lH2dR4kNsdFCGnmq14wB0kxeYP2KeU6rn+VoN9oFz7KUzPD06lPWzaTHLaxI7JhwcQKlQOMkadP+wzMe8fZI+A0uI0TQxznZZTujl9QEOcyw5uggewVmyPBanmoajnN202gnedvyVw3EcgFK5ZQqNnyQ03AkSDzt0VOu9rmfQJO9rxvGy0MMCwZRpv/KkW4Rj2lrgBaxAg/UKtYfCzN9jE9wYkKWrZkLtb820bQe67y/CAN81ybye+6ibiDUa1gEETczcbc+7YGVK9l5TStqaWgxDtiprCm4HKFX+L2eEymWumXwBz1ASAE9wHimmHFsOIHl1A/Uiyc6k/CYgOa3SLA30nXlKAQRdL4qrFcNY1x8mqwJbcmx6Hy/dY58YuJfFxFOlSkHDh4e6CPM/R5YPQNF+62vDkiZEFRfF/CmHx1IOeweJTOpjxZ0AyWE82uEiO87rX4biGve98RqS3TyEa8xsmVGWCzPhys+pTaWhzwbSwOcJHcbKC+IWGLcVTLaA/0wXE09L3P2h5JEi1vRbLh2NYA1oAAEACwAHIAJhxzllDFZdiBUABp0n1WPNtD2NLgQeQtB6iUcLxdJ9Uuy3Ol9PCIn5ZRdnkWH5hjWCpRNMmTQpirIMeK0uDiOsjSrNlONkC8FVjh+pRqDwKgLy8eUgQWO5FpJvfrun2EY+i/wAKoNLmmD+4IWvj6Ac3MtHBVCDkKvOErqzYCrsqbgHzHsrJlziFyWKprTcFZqLpUrh6trqBwr1K0HKhQqupPsqVdilMMbp0muDbaU5XoHCAf0rSd5PmTH2WTW/cmfiJDGvhjvp9V2m2ZO/hn1H7q7jHFuHqOGoa70UNP94700wZT5pUZhX3UgCvPqZh0LXKTxDlVeInlw0Dc29OpVkqusZVYxeIbrdJUJM1c3JSsgKtuwTWDpCY03MeC4xE+Wbbc7pDP+IW6yynDoO5Fp7KBdiC4yXEn1XQUMM8tzPsVs4XhhrCajso+6k8W7TJAkclY6FRtOkxjXN5OeQQQXGJ2+nsqbRqu6qZqZXiWAVA10QJIBABiTty7qZ+FzgX0urj+B0QR/cI5TH8K20sXLgJEdPop3B4tptzVIxdGsyk2ppIMS4HcgCZH02SeDzojzLNxeFc63JYlfAkW/4tGpVbqWLxok2jf+6zvD58A4lxtA9k0zzi6W6WmAPuVBhqD2EtyzKzKlIsMFLcbV6ZMB072Tb4dHVScx0S2pU9xNvtCouaZuXv3UnwPnRpOc7kH37ggT+wWq/CPGGI3soRQD3Fo3HpB/CvHFeVDVSqEyxrpLQTci7AANzI/NjoOBZTxOHbqYJLYIIEtt9lDYDEUMTTEEPafse45H8CPFUHYeH4cyZHl5RMuP0t9O5LMNXBaM0SLEafCFC1uWQVnWdVP02KqYdpnzSGuMNEnzGQN9PLsEvkeA1VvEDy0N6fzbS242TXjHCV8ViRWqBrI0keW9rtmbcyJ6tNxIXWUZ0yjNOo8MvYkwDMSJOxsnVv2AsuYvv77QoAGmqrvl7R4zZ2vHrFlcsJUhZlTzejUqNptqNLjya4Ha/LZWzLsU7UA6oQwehP1KyKZqUcQ17bd9o6zy1V0EZYKieLsb4WYUXtBLDTd4sRAOzSf/K/vCsuFql4BAJEWVG4lwFJ+PoSSRUrM1SYMt8wO9xaCPTotFw79MRso8V2dSszMYkmSNILzp5m/KLJ7SYVO4lzpjKtEVCBT8TTqPJxBh3tt7lWbBYmNrppj8noVq5e+m2pAFnjUBtMNNp7wpX9FR0zpAgRAsI9AnModrVy0nw5m50InUdw239WXAkhRzM9bUqPaGmGw0PFw50S6PSYnrPRJ8T5m6jhH1RZsGXR8oG8DmTt7pXFspy1zNyDqHpsVBce5mxmV4ptQiHUXsbP9bwQ0DvJClYZxT875JFovJIEeenftZISQ2yp9b4oUfDZUYwEuaQ6kH+dr2xMCLtcHAg9Q4clUeKviPXxtI0GtFGkfmAdLnxsHOgQ3sPqqZljAarATEmCeg5n23TrOsG2m8Fjw4Ok8reo5HsutocKwtF2Zrb959Jg+Sizmbpfh3EFlYOABAuQdvU/VWr4gZ5S8TD1KA8xpgVJvMRvO/P6qg4V7gQQY5Tf/hSGd4SuA2rUg03WY9vy9S29wfVXsk2KcX7hW3K87f4jNJlrotEgHoOm60zBcvwXvZYTkWLqNMNPcStp4QzT9TRaSBqphtNxHM3+8QsbjWEonDuqgQ4X5TcCPvIU2Cr1RVFMmQed/FWnChSeFplzoCbZfhHOiBbqVYcLhwwWueZXNcN4TUxbw5whm559B389ArWJrBthqlmMgQu0EF6A0ACBostRRcm2NbLHDtb1FwliuCnPaHNLTobeagBgyoYVIIUgypZRmPGhxHI3Hp0XOCxI0xOy84r0X0XljtRb536rWbVa5P8AEvsSsX4gz1/iYgAm9Qsb2AEGPp91rOMxEMKx/jRo8QENAmXGOZJ3+wV7g9IPe57haw/Pt5q5hmipWaOUny09Z8FB0d0qXJPD7E9rJEvuujIldKyrlClMG/zD1C3rK/CrMpkQGPpBrh3HryNl59wblauHuI69HyscIG09ByTmHILox2FdjKTchhzZjx9oWk/ECsylhvJGtmiDF+l/291jmJxGlx02BuB0B3HtsrDxFxC6tqEzq32sAbC1lTc0qRpjo791A+KtSY6Km/BnC8PzO/cHT4GAfdL4rM+/Lqo/C+LXf4dNrnuJMAdOZPQdyo7EVCYA3Jj36LQeGcM3DUtI+d0F7up6egT35aDJAudP5XOvJqm+gXWVfDd1QasRXFM/0MAe73JsD6SrDhPhvg6cltatJsZcz9oS2BxriR+XU7hXzzWPVxGIcYzeScGtbeFXa3C2Jw38TBVy4gf6boaXdgdifVMR8SX0nupYilpqMs4fKQf2I7haDQaCqrx/w1TxlEmIrNBNN8XsJDe4ULHMLgMQJB/yFiO/mPuio3PtJ+b6qn53xoKpLgABeFXcrpjHVXF/yM2AkAnvHJQeDy9xcW1Zs4gt2MgwVcsi4ZfrJo+VhHmDnGJ7d1uOpUcM05Dfmsqo5tw0QSu8PwpWGKpOwJAIdLg5x0BvOSeUcu60bFVa9HSH0hdwbra6WyfaUz4PoGmyox8aw+ZBmW6QBvfcFS2f5waeEf5degAx1MiNhZYeJrsxD8lQSRZp58genI7aJWZmtmUwxfDjMW4OcPPSIcx2pwLXAgy28cul4Urw1isQ8EYgt1NqPZ5RGoMcRqPSeii+Gs2GKGulqbHzahseg6qcwOCdRk6i8OeXEmJDnXdEclQxDXGlkc0y3neB05ddip6Z+rXVWChRDpLRB9Tf1lCk0O+ax6KLw2cU3yadQOgwYOx6EcinjcTNwojiaX0lzPqGvI8jAi4UuXaVU/ibgatDDvxWFrGm+mNZFiHNbd7SHAyIuOhG6wHPOJ8XiwBiKpeAdQbADQYiYAud9+pW2fGrOn0MJo0EiuHUw7+USPNq6HTMDnfosTyzhytWYag0sYBOp5ibxa3XrC6/h4pNa6s9gZexgT4bwdosLxZVHuA3UO10InOlXrB5UbUXjVplkNloMOIiRGu5nfnMJ1m/w8foDqLSHHZhkhwhvM7GSZ5CFotxTCY/4tQ8HxIph5yybxN/Y+BPoqJRAjutM4cw9HE5fUoVHC7ZEn5X/wAhHS8LNXYdzH6agLSNw6x3gq2cO42ix7WF1iRMC3Ynr/hTgmVnvDezM6jzn8J7wRwBUxbgXV2NbpDnAAucL/LyAK3Dh/hihhaYp022FyTuSd3Huob4Z/p30H1qDYmoWE/7en50VyqUtTS0OLCdnNiR3Egj6hQ1KQqCHCfRRsflOYapjnXEmEwIArVNLiJDAJcR1gbDuUxy/wCImBqu0ansJ2Lm2+rSVh/EWOqPxdY1nF7xUc0ucAPkJaDAsLDYKMwWN0VAbkzyUDHkG2ivNw7XNkm69XUqrXNDmkEG4IMgrtUP4fZmHNa1rpa4lunmHNEzHVXqVeF1QeC0wVFOYQknAqWNNI1KTeakUGVV/M8OXsI57tPdZ/js9GFcTVBAFnDmCtSxFNvIqtZ7wrhsVHjN1QZF4222Wdi+GsxDg466HqPdNzEFQ3DGd0sdrFPVDGgmY/mNv2KrXxAysteHdhH3Wj5LlVLDUxSpMAaPcm8yTuVC/EXAGphtYF2bx0PP86qL9EzD0/o0Bn3WtwzEZcS3rbz0+6xdryEkSu3G8FckJ0LqXEkQlKNSE8ZUTBid4VpdtdRv0VrDVCICd0QSQAJJ5JlnrtJbO4B68/32S9SppiNz9TyV8Zw2w0GNeBq0jV/uO/3KbSYc2ZUeP4wNw4og3cR5C/rCy3I6gfXaSPlBd9P+1c8PXnYo864cFKjUewXDT9OajcuH8VwFwNN+5Fx3RXGZ09PnqueouHYx1PoPwrLgsWQev5srJl+Jl8jmL35z+fVUpsyCOR/CpzLq1478u/os2qwC4TGvJsrvQqxf0+5/PqksbWt+eiiaeK69v8FDxi4wP8XVCqZCssF1nHHFBtHHfw5PisbUIA2JkHb0lTnDePa1gD3Brgb6jvckGff7KE4lxIq46ppM+HDNojTeO+6kOHaHiVwXAEMgx1PK3stJ4/8AmYH6gC+/T8LJxDh2zoVk8KpXr02U3OpidT6jbHQLkCd9VhtEElaFl1Jo8ogN52/fqVUMPWFN/ib7z1gqbp5i3TqaZ8uqBvAvssWpWLKg+mQPvff5bbdPpxlSmIwzKNZwY1rdZ1kC0nYuj2UjhKtiHHyAEknYcyUxwTA9/iPbJLQACNmm8fdSv6UU3agIafePToik/wCt1caT9Q3APO0Ee2yeW7Kj8O4FpfUrta5hrVaj7gg6C92gQdhEH3VsqYMaYa/zwSGnmBvH5zXebZvRw9N1WuZA2FtT3cmt7rPcNxbGJqV2Nu5sAOOrRTbJN5j19VLSpfqXurEZmmRG4uPDuvsrlDAYmsyaTZA3kAfc3Tz4n4mnVwQoVDd7qenqC14LiPaR7rNquMJfoYA2m0BukTpMCwvfp7lXDNW0MVra5rtcDw3CoPLpM1LCxvb2sqrm+X+HUJEw7zNN99onsYK2qDcoyudJudIvbY9An8Pwjm4zs8QyLSA689evepLCNDA2qHXcC1p2812lpAuLGQecq5VNMv16AXhpBDwRF3OBAMkuDmuvy1LMaVfT7945z7ixG/RWPKcxc8spCHEloaIEuLSQPLf+Woe3ljqpSIldVVGe88/LX7ePgnmc8P0sT5XtggEsqNbG/sJE8ukdTFOpcGYr9T4FNuuQ1wqbNDTzJ6jaOy1PD5aNVM1NIBbqs1uqdLTpd5ZEGedv2nspxFKkxxd5nF0ktBMkwAJ9lLRxtFroc8ALmeLVsPUZLXAvtp4gjlbXpbYwuuEsobgcKyg0yRLnu/qe75j6cvZP6uZlu4UpRoBzQ4bESg7AA8lrOOYAtWC0HdYZ8R8pms7E0B/qXqU4uHc3N6g8x1VRwGArPcAyk8k2gMJ/4XpmpktJxksB9krh8pps+VgHoFC2gdz9laGKIER91Wfhvws/DU21Kwh8GG9J5kdYt7q9JOmyF3+c1YAyiFXc4uMlFXfCj6j1IVRITGrST2qN8lNXlIuanD6ZSZYUhTITcthN8Q0OaWuEgggjsU8cD0XDqfZQuBKe1Ylxlwy+hUL2AlhO/TsVVF6Hx2XCqC0iQeSq+J+HDXmRI9gqow9Rttlv4fjAy/3gSeY3/lZApvBtaylJ+Zx8o5xyt6rQqHwnZMuqEdk+ocCU6JsJ7kJXYVzxBMJTxrLORnmfZUbhvJxrFasJLbsbyB5E9Y6K0Oqknn9VYG5MByRHLAldhrQFl1MW+q/PUKrGIcSCDsQQfQqs0sMKbiNr/XutHr5VKgsw4dc7ZVn4Z8WT2126Ks1QdwnGCeR9PvP+Eu/J8S0/6Zd6f2KeYHJMS82oH3I/fkqr6FWIypzalOZzJanVJEfkeya5jmzqTDpEvIhvaeccldsm4QcPNVIH/iL/AHS+a8L0jdrAPZFHhjnGagty3+fLIq4uBDPNYA3A1WuLwXAuJJPUm5nqp3hnE1KFUl8lrhBtseR/f6rTH8LtG7YXQ4Vb/Sp8S5hPZvc2TsSAVQlxEwoB2cU4a0S7UWg2IDQT5iSeysbMYACBEERPb+yDOEI/l+ydU+GotBjp/hZtTh9Zv7AQlbBT/JsY19JpbeLHqIt/lS3iF4DYmTt2HNNcr4fYwTqLT2spzD0WMFjvv3UOF4NVz/3DDDtKtOqDLZYDx9mr6mLqUy+WU3uY0QQBpJG072ief2UXg325CCImQJn5oJMm0EREFPOP8GaWY1wQRNRzxMGWvOsH0uovLxLg0kNm06Z+Yc45THe61G0W02hjRAC7nAlraLQ3SB9xJ91oeXU6b6Qc0OBiQCHVDOo+Z9w1g1awA2Ta+8FljeD3VqYeyoINwJMAgkEDV3BCPL8cXNLd2nzNDi06XujxNLSYiS4F7uW/Rapw3SIwtMPLpILvMWkw5xcASABsQn06ZqvgGIHzl5rH4zLGtfuHWve4k315TpvrMrFGfDnE+Y1HNbABYAGuLyd7AiNh9U94Z4UqUcXqeZDaT3gkFp1CABpPYmCOnJay1syfM2SSPlIA5CNlAZxjiZayCS4DV5YmYtA3MrNq16mQl7vpNgI18ddPWy56txPEFpaXWIjTn11UfUqMDyJk6dG0+aSHH9/ql8PRe6GtZE9N/ZcVss8JxAuPyf3S2ErFpDmOgj0/5WO+vLhsN+7dZrQQYKs/DuWvpA67TsJJ/wABTcKKybMTUEOiQN9TZJ7NHJSy7ThoojDt7GcvXWd58eVuStCIsudKGhdIK8iEQCEI0EJYScIaEouUspkJM0guf07eiWXSJRCbfpx0XJww6JyiKEsJv4PZDQlyuSlQkvDReEDySqNIhM3YFpXBy5qflGUIgKM//mNRjK2dFIIISZQmjcvYP5Qlm0ANglURSFEJKsQ1pPQEqI1FxEn1Unidiomnuuf4vVcKtNk2OvmpqYsSucTIqXuusIfNfkix3zD0XVPmueqA/qnGTrP5/CmH7VNYe7R+WXbzC6pfKPQfshUXesGVoHQKodVG1XFNKlUjZPqqa1VHUbISCyofxEyg4hrarf8AUYIj+tsyL9Ry9Ss1ZReCR5gdiLj6rbM42VQpf+oZ/uWe9mXddPwniDqbMjhIFxeI6dyfcC8JPrND6zCxkhxDgP4lhsT5uUHkVo2Nw1SPJHboE+w3yj0S6ujBsyZZN9wsvG8QqYqrndpsNh/J3P4VYOFrvcKYboG7n9p2b9Pzm9w+Q0xveCCABAB6wppBVmcHw4M1PqO06AdwgeKzQ0KDzHK3ES25/P8ACq+Jy+s1x/hO35LREFBU/p+i9xLHFvTUfg/dI9gcZVa4XwtRjnF7S23Pr9P+VZUEFpYTCDC0+yaZ3804CBCKUJRoKyhBBBBCVf/Z",
        isCorrect: true,
      },
      {
        img: "https://restcountries.eu/data/afg.svg",
        isCorrect: false,
      },
      {
        img: "https://restcountries.eu/data/afg.svg",
        isCorrect: false,
      },
     
    ],
  },
];




// Quel est le nom du pays ?
// Quel est le code du pays ?
// Quelle est la capitale du pays ?
// Dans quelle région se trouve le pays ?
// Quel est le code de la monnaie du pays ?
// Quel est le nom de la monnaie du pays ?
// Quel est le symbole de la monnaie du pays ?
// Quel est le code de la langue parlée dans le pays ?
// Quelle est la langue parlée dans le pays 
export default DATA;
