import React from "react";

import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              margin: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media(max-width:600px)": {
              mt: 0,
              "& h4": { fontSize: "1.5rem" },
            },
          }}
        >
          <Typography variant="h4">Welcome To My Resturant</Typography>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora hic
            iusto quo nostrum at, mollitia vero aliquid provident deserunt
            maxime libero molestiae et illo nulla error enim nesciunt harum vel
            accusantium cupiditate deleniti rem ullam aut. Cupiditate in,
            repellendus quisquam a officiis sunt illum itaque iusto ipsam quae
            doloremque magni reprehenderit labore dolor eos ab atque id! Alias
            ad iusto consequatur impedit. Eveniet est nulla quidem quis
            consequatur perspiciatis sequi obcaecati autem exercitationem nihil,
            laudantium soluta consectetur at ducimus laboriosam amet cum totam.
            Sequi, quam? Odit modi, voluptatum natus, atque mollitia alias iusto
            nulla quibusdam, praesentium veritatis cumque pariatur dolorem!
          </p>

          <br />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, nemo voluptatibus corporis delectus recusandae autem
            consequatur quaerat dolore, laudantium voluptatem quasi odio?
            Dignissimos fuga eum nostrum esse ab corrupti molestias, cumque quo
            debitis quis ipsam, eligendi dolor vero. Illo sunt enim deleniti
            dicta eveniet deserunt eius ipsa mollitia pariatur soluta
            praesentium, quasi molestias, ea quam quas, ratione esse! Omnis,
            veritatis hic ipsum possimus deleniti pariatur sit unde? Saepe nihil
            veniam illum libero minus! Libero dolore iusto amet, quam laudantium
            accusamus, nulla numquam deleniti veniam est neque quia, accusantium
            similique facilis in repellat? Deleniti corrupti vero cum natus
            voluptates! Fugiat, quas.
          </p>

          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quae magnam delectus quasi doloribus dolor obcaecati amet temporibus
            officia culpa? Quibusdam, doloribus nemo. Possimus veniam sed
            ratione eveniet culpa nemo incidunt molestias dolorem nostrum rem
            ipsam iure, illum est, ex sit sunt saepe debitis dignissimos dolores
            ipsa tempore omnis aperiam illo. Veritatis illo sapiente impedit
            deserunt tempore placeat minus obcaecati nulla quae reprehenderit,
            tenetur odit ipsa corrupti doloremque laborum voluptatem sequi unde
            reiciendis quo aspernatur pariatur natus aliquid beatae! Mollitia
            sunt qui officia, quibusdam optio minima sequi, expedita blanditiis
            nam adipisci est veniam laboriosam provident, illo corporis
            doloribus. Minus rerum maiores excepturi nostrum, libero assumenda
            aliquid adipisci soluta repellat harum quas, eligendi ab blanditiis,
            dolore reprehenderit dicta corporis veritatis voluptatum? Similique
            atque porro ipsam temporibus officia tenetur? At quaerat, provident
            quos nesciunt similique inventore suscipit dolorum velit
            perferendis, nostrum facere eum, non voluptatibus sapiente
            consectetur reprehenderit animi nobis dolor officiis!
          </p>
        </Box>
      </Layout>
    </>
  );
};
export default About;
