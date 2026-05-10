"use client";

import { motion } from "framer-motion";
import { AuroraProfile } from "@/lib/numerology/types";
import { NumberCard } from "./NumberCard";

interface Props {
  profile: AuroraProfile;
  userName: string;
}

function EnergyBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-xs text-muted-foreground mb-2 tracking-wider">
        <span>{label}</span>
        <span className="text-foreground">%{value}</span>
      </div>
      <div className="h-1 bg-border overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

export function ResultDashboard({ profile, userName }: Props) {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Frekans Haritası
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
          {userName}
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
          Ruhsal kodların ve enerji dağılımın aşağıda detaylandırılmıştır.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <NumberCard
          title="Kader Yolu"
          value={profile.lifePathNumber}
          description="Ruhunun bu dünyaya gelirken imzaladığı ana sözleşme ve yürünecek en yüce yol."
          isMaster={[11, 22, 33, 44].includes(profile.lifePathNumber)}
          delay={100}
        />
        <NumberCard
          title="Tam İsim Enerjisi"
          value={profile.fullNameNumber}
          description="Kişiliğinin, yeteneklerinin ve dış dünyadaki tezahür gücünün toplamı."
          isMaster={[11, 22, 33, 44].includes(profile.fullNameNumber)}
          delay={200}
        />
        <NumberCard
          title="Ruh Güdüsü"
          value={profile.soulNumber}
          description="Kalbinin en derin arzusu. Kimse bakmadığında hissettiğin gerçek sen."
          delay={300}
        />
        <NumberCard
          title="Kişilik Maskesi"
          value={profile.personalityNumber}
          description="Sosyal yaşamda giydiğin zırh ve başkalarının seni ilk algılayış biçimi."
          delay={400}
        />
        <NumberCard
          title="Ata Mirası"
          value={profile.surnameNumber}
          description="Köklerinden ve soy ağacından sana aktarılan genetik ve enerjisel miras."
          delay={500}
        />
        {profile.auroraMirror && (
          <NumberCard
            title="Aynalı Kapı"
            value={profile.auroraMirror}
            description="Potansiyelinin en yüksek oktavı. Ruhsal uyanışın gizli anahtarı."
            isMaster={true}
            delay={600}
          />
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white border border-border p-8"
        >
          <h3 className="font-heading text-2xl text-foreground mb-8">
            Biyofrekans Dengesi
          </h3>
          <EnergyBar
            label="Ateş (Eylem & İrade)"
            value={profile.balance.fire}
            color="#991B1B"
          />
          <EnergyBar
            label="Su (Duygu & Sezgi)"
            value={profile.balance.water}
            color="#1E6091"
          />
          <EnergyBar
            label="Hava (Zihin & İletişim)"
            value={profile.balance.air}
            color="#A16207"
          />
          <EnergyBar
            label="Toprak (Madde & Güven)"
            value={profile.balance.earth}
            color="#166534"
          />
          <EnergyBar
            label="Ruh (Bilinç & Hikmet)"
            value={profile.balance.soul}
            color="#6D28D9"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white border border-border p-8"
        >
          <h3 className="font-heading text-2xl text-foreground mb-8">
            Karmik Matris
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Frekans Daralması (Blokajlar)
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.missingNumbers.length > 0 ? (
                  profile.missingNumbers.map((n) => (
                    <span
                      key={n}
                      className="px-3 py-1.5 text-sm border border-red-200 text-red-700 bg-red-50"
                    >
                      {n}. Çakra Kapalı
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-green-700 italic">
                    Tüm enerji kanalları açık ve dengeli.
                  </p>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                Frekans Aşımı (Taşkınlar)
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.excessNumbers.length > 0 ? (
                  profile.excessNumbers.map((n) => (
                    <span
                      key={n}
                      className="px-3 py-1.5 text-sm border border-amber-200 text-amber-700 bg-amber-50"
                    >
                      {n}. Çakra Yoğun
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-green-700 italic">
                    Enerji akışında aşırı yüklenme tespit edilmedi.
                  </p>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
