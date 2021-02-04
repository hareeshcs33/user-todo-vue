<template>
  <div class="nav-header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div class="navbar-brand active">
                <router-link to="/"><i class="fa fa-home"></i>Hareesh CS</router-link>
              </div>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <div class="nav-link">
                <router-link to="/home">Home</router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link to="/about">About</router-link>
              </div>
            </li>
            <li class="nav-item">
              <div class="nav-link">
                <router-link to="/contact">Contact</router-link>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
