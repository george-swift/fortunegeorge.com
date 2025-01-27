terraform {
  backend "remote" {
    organization = "indiehackers"

    workspaces { 
      name = "client-digital-marketing-portfolio" 
    } 
  }
}
