 // const AddDomain = () => {
  //   const data = {
  //     nameDomain: JSON.parse(window.localStorage.getItem("domain")).name,
  //   };

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/ld+json",
  //       Authorization:
  //         "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTkyODI5NDgsImV4cCI6MTY5OTI4NjU0OCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlckBiZS1kZXYub3JnIn0.cfdHjUrRrbsF_UEJHv_4FbC__EKSniAJExsEFHuzppqoRiJ5FMs2SwHbR-yFtNgGTR3avaUM0atHLVXSBfinj4s5HEV9oaOqqB19CBLpFppVttf6YYPGDMD4bHNd105WMQlKDrqV1uleaizsc-minFAYBqg90NpqPy1C9df1_fR83sbfc8GesLmhn5b0lK3W3iJlqWLsN3J-34-yt82jINBPtMBlodJHDpBtEGn3atbeltgGAMYOiwGmgLErQMzVG7uf5qGAk0dktFnl-2e1jnqZF4pm3Gw8nlQ7BBuSfZJ71G0cpHWZuEI1e3SJWISWXVj0oKLbAwZE9dgYUr7W2g",
  //     },
  //   };

  //   // REPLACE DOMAINS WITH DOMAINES
  //   axios.post("/api/location_domains", data, config).then(() => {
  //     alert("success");
  //   });
  //
  //   newDomain.collections.map((domain) => {
  //     if (!domain.nameDomain) {
  //       axios
  //         .post("/api/location_domaines", data, config)
  //         .then(() => {
  //           alert("Domaine crée !");
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });
  //     } else {
  //       alert("Erreur : Nom de domaine existant");
  //     }
  //   });
  // };
  // AddDomain();