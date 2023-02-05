import { Card, Collapse, CollapsePanelProps, Row } from 'antd';
import { PickaxeIcon } from 'assets/other/';
import Image from 'components/Image';
import { Pickaxe, UniqueParts } from 'data/pickaxes';
import { ProgressQuery } from 'types/progress';
import PickaxeCard from './PickaxeCard';
import PickaxeProgressBar from './PickaxeProgressBar';
import UniquePartCard from './UniquePartCard';

const { Panel } = Collapse;
const { Meta } = Card;

export default function PickaxeParts(
  props: {
    getProgress: ProgressQuery;
    pickaxes: Pickaxe[];
  } & Omit<CollapsePanelProps, 'key' | 'header'>
) {
  const { getProgress, pickaxes, ...panelProps } = props;

  return (
    <Panel
      {...panelProps}
      key={0}
      style={{ marginTop: 16 }}
      header={
        <Meta
          title="Pickaxe Parts"
          avatar={
            <Image
              alt="Pickaxe Parts Progress"
              src={PickaxeIcon}
              style={{ height: 64, width: 64 }}
            />
          }
          description={
            <PickaxeProgressBar
              barColor="#dc8c13"
              category="PickaxeSets"
              getProgress={getProgress}
            />
          }
        />
      }
    >
      <Row gutter={[16, 16]}>
        {pickaxes.map((pickaxe) => (
          <PickaxeCard key={pickaxe.name} pickaxe={pickaxe} />
        ))}
        {UniqueParts.map((uniquePart) => (
          <UniquePartCard key={uniquePart.name} uniquePart={uniquePart} />
        ))}
      </Row>
    </Panel>
  );
}
