<script>
import image from '../../assets/Logo_Morpheus.png'

export default {
    name: 'NavBar',
    data() {
        return {
            image
        };
    }
}
</script>

<template>
    <div class="container">
        <div class="divLogo">
            <img class="logo" :src="image" alt="Logo"/>
        </div>
        <nav class="divList">
            <ul>
                <li><router-link to="/">Dashboard</router-link></li>
                <li><router-link to="/mapas">Mapas</router-link></li>
                <li><router-link to="/configuracoes">Configurações</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
.container {
    background-color: #0D1117;
    height: 150px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.divLogo {
    padding-left: 40px;
}
.logo {
    width: 400px;
}
.divList {
    padding-right: 40px;
}
.divList ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;
}
.divList li {
    list-style: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
}
</style>
